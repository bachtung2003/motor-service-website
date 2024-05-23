var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var routes = require('./route/routes')
mongoose.set('strictQuery', false)

const app = express()

mongoose
  .connect('mongodb+srv://Hoang145:Anhongdo20@cluster0.ixicmt3.mongodb.net/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(5734, () => {
      console.log('Server is running on port 5734')
    })
  })
  .catch((error) => {
    console.error('Connection error', error)
  })
app.use(express.json())
app.use(cors())
app.use(routes)
