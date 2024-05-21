import { Router } from 'express'
// eslint-disable-next-line no-undef
import pkg from 'bcryptjs'
// eslint-disable-next-line no-undef
import { sign } from 'jsonwebtoken'
// eslint-disable-next-line no-undef
import User, { findOne } from '../User.js'

const { hash, compare } = pkg

const router = Router()

// Register
router.post('/register', async (req, res) => {
  const { username, password, confirmPassword } = req.body

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  try {
    const existingUser = await findOne({ username })
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    const hashedPassword = await hash(password, 10)
    const newUser = new User({ username, password: hashedPassword })

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
    const user = await findOne({ username })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' })
    res.json({ token, username: user.username })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
