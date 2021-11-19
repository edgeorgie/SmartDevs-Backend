const express = require('express')
const { conexionDB } = require('./db/db')
const cors = require('cors')
const app = express()


app.listen(3000, async () => {
  await conexionDB()
  console.log('Servidor corriendo en el puerto 3000')
  
})

app.use(cors())