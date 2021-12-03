import { InscriptionModel } from '../inscripcion/inscripcion.js';
import { UserModel } from '../usuario/usuario.js';
import { ProjectModel } from './proyecto.js';

const resolversProyecto = {
  Proyecto: {
    lider: async (parent, args, context) => {
      console.log(parent.lider);
      const usr = await UserModel.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
  },

  Query: {
    Proyectos: async (parent, args, context) => {
      const proyectos = await ProjectModel.find().populate([
      //{ path : 'lider'},
      //{ path :'avances'},
      //{ path : 'inscripciones', populate: {path : 'estudiante'}},
      ]);
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args, context ) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );
      return proyectoEditado;
    },
    crearObjetivo: async (parent, args) => {
      const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $addToSet: {
            objetivos: {
              ...args.campos,
            },
          },
        },
        { new: true }
      );
      //console.log(proyectoObjetivo);
      return proyectoObjetivo;
    },
    editarObjetivo: async (parent, args) => {
      const proyectoEncontrado = await ProjectModel.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return proyectoEncontrado;
    },
    eliminarObjetivo: async (parent, args) => {
      const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos: {
              _id: args.idObjetivo,
            },
          },
        },
        { new: true }
      );
      console.log(proyectoObjetivo);
      return proyectoObjetivo;
    },
  },
};

export { resolversProyecto };