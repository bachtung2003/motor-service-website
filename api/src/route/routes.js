var express = require('express')
var userService = require('../User/userController.js')

const router = express.Router()

router.route('/user/login').post(userService.loginUserControllerFn)
router.route('/user/create').post(userService.createUserControllerFn)
router.route('/test').get((req, res) => {
  res.send('Test route working')
})
module.exports = router
