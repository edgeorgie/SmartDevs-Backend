const mongoose = require('mongoose')

const conexionDB = async () => {
  return await mongoose.connect(process.env.BASE_DE_DATOS_URL)
  .then(() => {
    console.log('Conexion a la base de datos establecida')
  })
  .catch((e) => {
    console.error('Error conectando a la base de datos', e)
  });
}

exports.conexionDB = conexionDB