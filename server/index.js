require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4"); // works if correct version
const connectDB = require("./config/db");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();
const port = process.env.PORT || 5000;

// DB connect
connectDB();

// middleware
app.use(cors());
app.use(bodyParser.json());

// async server start
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.get("/", (req, res) => {
    res.send("Apollo v5 GraphQL Server 🚀");
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer();