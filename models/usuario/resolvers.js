import { UserModel } from './usuario.js';
//import bcrypt from 'bcrypt';

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find()
      .populate(
        {
        path: 'inscripciones',
        populate: {
          path: 'proyecto',
          populate: [{ path: 'lider' }, { path: 'avances' }],
        },
      })
      .populate({
        path: 'avancesCreados',
        populate: {
          path: 'proyecto',
          populate: [{ path: 'lider' }, { path: 'avances' }],
        },
      });
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await UserModel.findOne({ _id: args._id })
      .populate({
        path: 'inscripciones',
        populate: {
          path: 'proyecto',
          populate: [{ path: 'lider' }, { path: 'avances' }],
        },
      })
      .populate({
        path: 'avancesCreados',
        populate: {
          path: 'proyecto',
          populate: [{ path: 'lider' }, { path: 'avances' }],
        },
      });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
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