const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const massive = require("massive");
const GraphQLHTTP = require("express-graphql");
const app = express();
const schema = require("./schema");

let db;

massive({
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: true,
  poolSize: 10
}).then(resp => {
  db = resp;
  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    GraphQLHTTP({
      schema: schema(db),
      graphiql: true
    })
  );

  app.listen({ port: 4000 }, () => {
    console.log(`server is ready at http://localhost:4000/graphql`);
  });
});
