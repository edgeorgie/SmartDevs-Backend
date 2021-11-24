const express = require('express')
const { conexionDB } = require('./db/db')
const cors = require('cors')
const app = express()
const Usuario = require('./routes/GestionUsuarios/index.routes')
const morgan = require('morgan')
require('dotenv').config()

app.listen(process.env.PUERTO, async () => {
  await conexionDB()
  console.log('Servidor corriendo en el puerto ', process.env.PUERTO)
  
})

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(Usuario)

app.use(cors())