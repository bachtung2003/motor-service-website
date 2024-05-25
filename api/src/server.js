var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var routes = require('./route/routes')
const stripe = require('stripe')(
  'pk_test_51PIpED01HTEsX8gXhs9HBmHQl16bAZYyvArNfoLvILs5DO7IoIC6uqG7uqiHMkjCwu5EZF5VYu9JSvkBJoALW0kw00qNCZMn76'
)
require('dotenv').config()
mongoose.set('strictQuery', false)

const app = express()

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, () => {
      console.log('Server is running on port ', process.env.PORT)
    })
  })
  .catch((error) => {
    console.error('Connection error', error)
  })
app.use(express.json())
app.use(cors())
app.use(routes)
