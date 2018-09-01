const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const massive = require("massive");
const app = express();
const schema = require("./schema");

app.use("/graphql", cors(), bodyParser.json())


/*
 
 ███████╗███╗   ██╗██████╗ ██████╗  ██████╗ ██╗███╗   ██╗████████╗███████╗
 ██╔════╝████╗  ██║██╔══██╗██╔══██╗██╔═══██╗██║████╗  ██║╚══██╔══╝██╔════╝
 █████╗  ██╔██╗ ██║██║  ██║██████╔╝██║   ██║██║██╔██╗ ██║   ██║   ███████╗
 ██╔══╝  ██║╚██╗██║██║  ██║██╔═══╝ ██║   ██║██║██║╚██╗██║   ██║   ╚════██║
 ███████╗██║ ╚████║██████╔╝██║     ╚██████╔╝██║██║ ╚████║   ██║   ███████║
 ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝      ╚═════╝ ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
                                                                          
 
*/





/*
 
 ██████╗ ██████╗        ██╗       ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
 ██╔══██╗██╔══██╗       ██║       ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
 ██║  ██║██████╔╝    ████████╗    ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
 ██║  ██║██╔══██╗    ██╔═██╔═╝    ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
 ██████╔╝██████╔╝    ██████║      ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝ ╚═════╝     ╚═════╝      ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
                                                                                   
 
*/
massive({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: true,
  poolSize: 10
}).then(resp => {
  app.set('db', resp)

  app.listen({ port: 4000 }, () => {
    console.log(`server is ready at http://localhost:4000`);
  });
})
