var express = require('express')
var userService = require('../User/userController.js')
const {
  verifyToken,
  verifyTokenAndAuthentication,
  verifyTokenAndAdmin
} = require('./verifyToken.js')
var key = '123456789trytryrtyr'
var encryptor = require('simple-encryptor')(key)
const User = require('../User/userModel.js')
const router = express.Router()

router.route('/user/login').post(userService.loginUserControllerFn)
router.route('/user/create').post(userService.createUserControllerFn)
router.get('/user/info', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const { password, ...userInfo } = user.toObject()
    res.status(200).json(userInfo)
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.put('/user/:id', verifyToken, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )

    if (updatedUser) {
      updatedUser.password = encryptor.encrypt(updatedUser.password)
    }

    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/user/:id', verifyTokenAndAuthentication, async (req, res) => {
  try {
    await User.findById(req.params.id)
    res.status(200).json('User has been deleted')
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/user', verifyTokenAndAdmin, async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router
