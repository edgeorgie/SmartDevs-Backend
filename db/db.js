import mongoose from 'mongoose'

const conexionDB = async () => {
  return await mongoose 
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Conexion a la base de datos establecida')
  })
  .catch(err => {
    console.log('Error conectando a la base de datos', err)
  })
}

export { conexionDB }