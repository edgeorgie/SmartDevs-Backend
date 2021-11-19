const mongoose = require('mongoose')

const conexionDB = async () => {
  return await mongoose.connect('mongodb+srv://dbSmartDevs:ZQuIcWTk9VzRB6D1@cluster0.7op1x.mongodb.net/proyectosSmartDevs?retryWrites=true&w=majority')
  .then(() => {
    console.log('Conexion a la base de datos establecida')
  })
  .catch(err => {
    console.log('Erros conectando a la base de datos', err)
  })
}

exports.conexionDB = conexionDB