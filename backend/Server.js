const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('./routes/ToDoRoutes')

require('dotenv').config()

const app = express()
const Port = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDB...`) )
    .catch((err) => console.log(err))

app.use(routes)

app.listen(Port, () => console.log(`listening on: ${Port}`))
