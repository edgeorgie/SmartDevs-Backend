import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Observacion {
    _id: ID!
    descripcion: String!
  }
  input crearObservacion {descripcion: String!} 

  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [Observacion]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }
  type Query {
    Avances(project:String): [Avance]
    filtrarAvance(_id: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
    editarAvanceEstudiante(_id: String!, descripcion: String! ): Avance
    agregarNuevaObservacion(idAvance:String!, campos: crearObservacion!): Avance
  }
  
`;

export { tiposAvance };