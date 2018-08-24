const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const massive = require('massive')

const app = express()
//graphQL Stuff
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({url}) => {
    console.log(`Apollo Server listening at ${url}`)
})
//to start servers use npm start
//go to localhost:4000 after its spun up and you'll see the playground for graphQL.

app.use('/graphql', cors(), bodyParser.json())

const port = 3001
app.listen(port, ()=> {console.log(`server is running on ${port}`)})

