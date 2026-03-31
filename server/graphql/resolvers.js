
const Client=require('../models/Client');
const Project=require('../models/Project');

const resolvers = {
  Query: {
    clients: async () => await Client.find({}),
    client: async (_, { id }) => await Client.findById(id),
    projects: async () => await Project.find({}),
    project: async (_, { id }) => await Project.findById(id),
  },
  Mutation: {
    addClient: async (_, { name, email, phone }) => {
      const client = new Client({ name, email, phone });
      return await client.save();
    },
    deleteClient: async (_, { id }) => {
     const deletedClient = await Client.findByIdAndDelete(id);
      return !!deletedClient; 
    },
    addProject: async (_, { name, description, status, clientId }) => {
      const project = new Project({ name, description, status, clientId });
      return await project.save();
    },
    deleteProject: async (_, { id }) => {
       const deletedProject = await Project.findByIdAndDelete(id);
      return !!deletedProject;
    },
  },
};
module.exports = resolvers;