const express = require('express')
const { conexionDB } = require('./db/db')
const cors = require('cors')
const app = express();
//const Usuario = require('./routes/GestionUsuarios/index.routes')
//const morgan = require('morgan')
require('dotenv').config()
const { ApolloServer } = require ('apollo-server-express');
const { tipos } = require('./graphql/tipos.js');
const { resolvers } =require('./graphql/resolvers.js');

//app.listen(process.env.PUERTO, async () => {
 // await conexionDB()
 // console.log('Servidor corriendo en el puerto ', process.env.PUERTO)
  
//})


const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req }) => {
    const token = req.headers?.authorization ?? null;
    if (token) {
      const userData = getUserData(token);
      if (userData) {
        return { userData };
      }
    }
    return null;
  },
});

app.use(express.json())
//app.use(morgan('dev'))
//app.use(express.urlencoded({ extended: false }));
//app.use(Usuario)

app.use(cors())

app.listen({ port: process.env.PORT || 3000 }, async () => {
  await conexionDB();
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});
