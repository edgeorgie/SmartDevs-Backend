import express from 'express';
import cors from 'cors';
import { conexionDB } from './db/db.js';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { tipos } from './graphql/tipos.js';
import { resolvers } from './graphql/resolvers.js';
import jwt from 'jsonwebtoken'
import { validateToken } from './utils/tokenUtils.js';

//const Usuario = require('./routes/GestionUsuarios/index.routes')
//const morgan = require('morgan')

//require('dotenv').config()

dotenv.config();

const getUserData = (token) => {
  const verificacion = validateToken(token.split(' ')[1]);
  if (verificacion.data) {
    return verificacion.data;
  } else {
    return null;
  }
};




//app.listen(process.env.PUERTO, async () => {
 // await conexionDB()
 // console.log('Servidor corriendo en el puerto ', process.env.PUERTO)
  
//})


//const server = new ApolloServer({
  //typeDefs: tipos,
  //resolvers: resolvers,
  //context: ({ req,res }) => {
    //const token = req.headers.authorization ?? null;

    //const context = getUser(token);

    //return { context };
  //},
  /*context: ({ req }) => {
    const token = req.headers?.authorization ?? null;
    if (token) {
      const userData = getUserData(token);
      if (userData) {
        return { userData };
      }
    }
    return null;
  },*/
//});

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req, res }) => {
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


const app = express();

app.use(express.json());
//app.use(morgan('dev'))
//app.use(express.urlencoded({ extended: false }));
//app.use(Usuario)

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conexionDB();
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});
