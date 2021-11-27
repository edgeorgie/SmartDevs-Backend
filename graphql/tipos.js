const{ gql } = require('apollo-server-express');
const { tiposEnums } = require ( '../models/enums/tipos.js');
const { tiposUsuario } = require ( '../models/usuario/tipos.js');
const { tiposProyecto } = require ( '../models/proyecto/tipos.js');
const { tiposAvance } = require ( '../models/avance/tipos.js');
const { tiposInscripcion } = require ( '../models/inscripcion/tipos.js');
const { tiposAutenticacion } = require ( './auth/tipos.js');

const tiposGlobales = gql`
  scalar Date
`;

const tipos = [
  tiposGlobales,
  tiposEnums,
  tiposUsuario,
  tiposProyecto,
  tiposAvance,
  tiposInscripcion,
  tiposAutenticacion,
];

exports.module = tipos