const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const massive = require("massive");
const app = express();
const controller = require('./Controllers/messageController.js')

app.use(cors(), bodyParser.json());

/*
 
 ███████╗███╗   ██╗██████╗ ██████╗  ██████╗ ██╗███╗   ██╗████████╗███████╗
 ██╔════╝████╗  ██║██╔══██╗██╔══██╗██╔═══██╗██║████╗  ██║╚══██╔══╝██╔════╝
 █████╗  ██╔██╗ ██║██║  ██║██████╔╝██║   ██║██║██╔██╗ ██║   ██║   ███████╗
 ██╔══╝  ██║╚██╗██║██║  ██║██╔═══╝ ██║   ██║██║██║╚██╗██║   ██║   ╚════██║
 ███████╗██║ ╚████║██████╔╝██║     ╚██████╔╝██║██║ ╚████║   ██║   ███████║
 ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝      ╚═════╝ ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
                                                                          
 
*/

app.get('/api/messages', controller.getMessages)
app.post('/api/messages', controller.addMessage)

/*
 
 ██████╗ ██████╗        ██╗       ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
 ██╔══██╗██╔══██╗       ██║       ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
 ██║  ██║██████╔╝    ████████╗    ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
 ██║  ██║██╔══██╗    ██╔═██╔═╝    ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
 ██████╔╝██████╔╝    ██████║      ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝ ╚═════╝     ╚═════╝      ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
                                                                                   
 
*/
massive(process.env.CONNECTIONSTRING).then(resp => {
  app.set("db", resp);

  app.listen({ port: 4000 }, () => {
    console.log(`server is ready at http://localhost:4000`);
  });
});
