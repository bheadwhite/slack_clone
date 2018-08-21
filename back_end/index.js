const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const massive=require('massive')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 3001
app.listen(port, ()=> console.log(`server is running on ${port}`))