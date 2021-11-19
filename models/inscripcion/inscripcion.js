const mongoose = require('mongoose') ;
const { Schema, model } = mongoose;
const {ProjectModel} = require('../proyecto/proyecto.js');
const  { UserModel } = require('../usuario/usuario.js');


const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ['ACEPTADA', 'RECHAZADA', 'PENDIENTE'],
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionModel = model('Inscripcion', inscriptionSchema);

exports.InscriptionModel = InscriptionModel;