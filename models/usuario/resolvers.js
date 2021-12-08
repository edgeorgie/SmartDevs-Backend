import { UserModel } from './usuario.js';
import bcrypt from 'bcrypt';
import { InscriptionModel } from '../inscripcion/inscripcion.js';
import { ProjectModel } from '../proyecto/proyecto.js';


const resolversUsuario = {
  Usuario: {
    inscripciones: async (parent, args, context) => {
      return InscriptionModel.find({ estudiante: parent._id });
    },
    proyectos : async(parent, args,context) =>{
      return ProjectModel.find({lider: parent._id})
    }, 

  },
  
  Query: {
    Usuarios: async (parent, args, context) => {
      const usuarios = await UserModel.find({...args.filtro});
      /*.populate([
        {
        path: 'inscripciones',
        populate: {
          path: 'proyecto',
          populate: [{ path: 'lider' }, { path: 'avances' }],
        },
        },
      {
        path: 'proyectosLiderados',
      }
    ]);*/
      //.populate({
        //path: 'avancesCreados',
        //populate: {
          //path: 'proyecto',
          //populate: [{ path: 'lider' }, { path: 'avances' }],
        //},
      //});
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await UserModel.findOne({ _id: args._id });
      //const usuario = await UserModel.findOne
      //.populate({
        //path: 'inscripciones',
        //populate: {
          //path: 'proyecto',
          //populate: [{ path: 'lider' }, { path: 'avances' }],
        //},
      //})
      //.populate({
        //path: 'avancesCreados',
        //populate: {
          //path: 'proyecto',
          //populate: [{ path: 'lider' }, { path: 'avances' }],
        //},
      //});
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);

      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        password :hashedPassword,
        rol: args.rol,
      });

      if (Object.keys(args).includes('estado')) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
      },
      { new: true }
      );

      return usuarioEditado;
    },
    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
        return usuarioEliminado;
      } else if (Object.keys(args).includes('correo')) {
        const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo });
        return usuarioEliminado;
      }
    },
  },
};

export { resolversUsuario };