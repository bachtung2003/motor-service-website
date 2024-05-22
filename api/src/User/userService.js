var userModel = require('./userModel.js')
var key = '123456789trytryrtyr'
var encryptor = require('simple-encryptor')(key)

module.exports.createUserDBService = async (userDetails) => {
  try {
    const userModelData = new userModel({
      username: userDetails.username,
      email: userDetails.email,
      password: encryptor.encrypt(userDetails.password)
    })

    await userModelData.save()
    return true
  } catch (error) {
    console.error('Error creating user:', error)
    throw false
  }
}
module.exports.loginuserDBService = async (employeeDetails) => {
  try {
    const result = await userModel.findOne({ username: employeeDetails.username })

    if (result) {
      const decrypted = encryptor.decrypt(result.password)

      if (decrypted === employeeDetails.password) {
        return { status: true, msg: 'Employee Validated Successfully', user: employeeDetails }
      } else {
        throw { status: false, msg: 'Employee Validation Failed' }
      }
    } else {
      throw { status: false, msg: 'Invalid Employee Details' }
    }
  } catch (error) {
    console.error('Error during login:', error)
    throw { status: false, msg: 'Invalid Data' }
  }
}
