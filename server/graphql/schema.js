const { gql } = require("graphql-tag");

const typeDefs = gql`
  # ENUM
  enum ProjectStatus {
    NEW
    PROGRESS
    COMPLETED
  }

  # TYPES
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
    status: ProjectStatus!
    clientId: ID!
    client: Client
  }

  # QUERIES
  type Query {
    clients: [Client!]!
    client(id: ID!): Client
    projects: [Project!]!
    project(id: ID!): Project
  }

  # MUTATIONS
  type Mutation {
    addClient(name: String!, email: String!, phone: String!): Client!
    deleteClient(id: ID!): Client!

    addProject(
      name: String!
      description: String!
      status: ProjectStatus!
      clientId: ID!
    ): Project!

    deleteProject(id: ID!): Project!

    updateProject(
      id: ID!
      name: String
      description: String
      status: ProjectStatus
     
    ): Project!
  }
`;

module.exports = typeDefs;