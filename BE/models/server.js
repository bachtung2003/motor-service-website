import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authRoutes from '../models/routes/auth.js' // Corrected path
import User from '../models/User.js' // Correct path

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Use authentication routes
app.use('/auth', authRoutes)

// MongoDB connection
mongoose.set('strictQuery', false)
mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.rjipatt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(5173, () => {
      console.log('Server is running on port 5173')
    })
  })
  .catch((error) => {
    console.error('Connection error', error)
  })

app.post('/user', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: error.message })
  }
})
