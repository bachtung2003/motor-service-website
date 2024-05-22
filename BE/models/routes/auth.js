import { Router } from 'express'
import pkg from 'bcryptjs'
import pkg2 from 'jsonwebtoken'
import User from '../User.js' // Adjust the path as necessary

const { hash, compare } = pkg
const { sign } = pkg2
const router = Router()

// Register
router.post('/register', async (req, res) => {
  const { username, password, confirmPassword, role } = req.body

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  try {
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    const hashedPassword = await hash(password, 10)
    const newUser = new User({ username, password: hashedPassword, role })

    await newUser.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' })
    res.json({ token, username: user.username, role: user.role })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
