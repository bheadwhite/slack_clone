const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const massive = require('massive');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socketController = require('./Controllers/socketController')

const messageController = require('./Controllers/messageController.js');
const userController = require('./Controllers/userController');

app.use(cors(), bodyParser.json());

app.get('/api/messages', messageController.getMessages);
app.post('/api/messages', messageController.addMessage);
app.post('/api/createUser', userController.createUser);

massive(process.env.CONNECTIONSTRING).then(resp => {
  app.set('db', resp);


  io.on('connection', function (socket) {
    socket.emit('message', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });



  server.listen({ port: 4000 }, () => {
    console.log(`server is ready at http://localhost:4000`);
  });
});
