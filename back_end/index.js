const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const massive = require("massive");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

app.use("/graphql", cors(), bodyParser.json());

//DB connection:
let db = massive({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: true,
  poolSize: 10
});
//Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return db
  }
});
server.applyMiddleware({ app });
//to start server use npm start
//go to localhost:4000/graphql after its spun up and you'll see the playground for graphQL.

app.listen({ port: 4000 }, () => {
  console.log(`server is ready at http://localhost:4000${server.graphqlPath}`);
});
