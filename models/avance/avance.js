const mongoose = require('mongoose');
const { ProjectModel } = require('../proyecto/proyecto.js');
const { UserModel } = require('../usuario/usuario.js');


const { Schema, model } = mongoose;

const avanceSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const ModeloAvance = model('Avance', avanceSchema);

exports.ModeloAvance = ModeloAvance;