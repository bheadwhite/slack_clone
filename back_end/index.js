const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const massive=require('massive')
//graphQL Stuff
const {graphqlExpress} = require('apollo-server-express')
const {makeExecutableSchema} = require('graphql-tools')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

module.exports = (
    schema = makeExecutableSchema({
        typeDefs,
        resolvers
    })
)
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
  }).then(res => {
    console.log('database is connected')
  })

const app = express()

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }))


const port = 3001
app.listen(port, ()=> console.log(`server is running on ${port}`))