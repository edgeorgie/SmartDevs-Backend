import { ModeloAvance } from './avance.js';

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id})
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },

    editarAvanceEstudiante: async (parents, args) => {
      const avanceEditado = 
      await ModeloAvance.findByIdAndUpdate(args._id, {    
        descripcion: args.descripcion,
      
      }, {new:true});

      return avanceEditado;
    },

    agregarNuevaObservacion: async (parents, args) => {
      const addObservacion = 
      await ModeloAvance.findByIdAndUpdate(args._id,{
        observaciones: args.observacion,

      },  {new:true});

      return addObservacion;
    },

  },
};

export { resolversAvance };