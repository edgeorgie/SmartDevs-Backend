const mongoose = require('mongoose')

const conexionDB = async () => {
  return await mongoose.connect(process.env.BASE_DE_DATOS_URL)
  .then(() => {
    console.log('Conexion a la base de datos establecida')
  })
  .catch(err => {
    console.log('Error conectando a la base de datos', err)
  })
}

exports.conexionDB = conexionDB