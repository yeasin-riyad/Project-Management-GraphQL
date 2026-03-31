const Project = require("../models/Project");
const Client = require("../models/Client");


const resolvers = {

  Query: {
    clients: async () => await Client.find(),
    client: async (_, { id }) => await Client.findById(id),

    projects: async () => {
      const projects = await Project.find({});
      return projects;
    },
    project: async (_, { id }) => await Project.findById(id),
  },

  Mutation: {
    // Add Client
    addClient: async (_, { name, email, phone }) => {
      const client = new Client({ name, email, phone });
      return await client.save();
    },

    // Delete Client
    deleteClient: async (_, { id }) => {
      await Project.deleteMany({ clientId: id }); // 🔥 better than loop
      const result = await Client.findByIdAndDelete(id);
      return !!result; // return true/false
    },

    // Add Project
    
    addProject: async (_, { name, description, status, clientId }) => {
      const project = new Project({
        name,
        description,
        status,
        clientId,
      });
      return await project.save();
    },

    // Delete Project
    deleteProject: async (_, { id }) => {
      const result = await Project.findByIdAndDelete(id);
      return !!result;
    },

    // Update Project
    updateProject: async (_, { id, name, description, status }) => {
      return await Project.findByIdAndUpdate(
        id,
        {
          $set: {
            ...(name && { name }),
            ...(description && { description }),
            ...(status && { status }),
          },
        },
        { new: true }
      );
    },
  },

  // 🔥 Relationship Resolver
  Project: {
    client: async (parent) => {
      return await Client.findById(parent.clientId);
    },
  },
};

module.exports = resolvers;