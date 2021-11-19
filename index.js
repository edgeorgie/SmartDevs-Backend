const express = require('express')
const { conexionDB } = require('./db/db')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.listen(process.env.PUERTO, async () => {
  await conexionDB()
  console.log('Servidor corriendo en el puerto ', process.env.PUERTO)
  
})

app.use(cors())