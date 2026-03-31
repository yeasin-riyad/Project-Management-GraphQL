const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }
    
  type Project {
    id: ID!
    name: String!
    description: String!
    status: String!
    clientId: ID!
  }
    type Query {
    clients: [Client!]!
    client(id: ID!): Client
    projects: [Project!]!
    project(id: ID!): Project
    }

    type Mutation {
    addClient(name: String!, email: String!, phone: String!): Client!
    deleteClient(id: ID!): Boolean!
    addProject(name: String!, description: String!, status: String!, clientId: ID!): Project!
    deleteProject(id: ID!): Boolean!
    }
`;  

module.exports = typeDefs;