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
router.put('/user/:id', verifyTokenAndAuthentication, async (req, res) => {
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
    await User.findByIdAndDelete(req.params.id)
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
