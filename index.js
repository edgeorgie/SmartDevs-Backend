import express from "express"
import { conexionDB } from "./db/db"
import cors from "cors"
const app = express()


app.listen(3000, async () => {
  await conexionDB()
  console.log('Servidor corriendo en el puerto 3000')
  
})

app.use(cors())