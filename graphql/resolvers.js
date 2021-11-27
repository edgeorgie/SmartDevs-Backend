const { resolversProyecto } = require('../models/proyecto/resolvers.js');
const { resolversUsuario } = require('../models/usuario/resolvers.js');
const { resolversAvance } = require('../models/avance/resolvers.js');
const { resolverInscripciones } = require('../models/inscripcion/resolvers.js');
const { resolversAutenticacion } = require('./auth/resolvers.js');



 const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversAvance,
  resolverInscripciones,
  resolversAutenticacion,
];

exports.resolvers = resolvers;