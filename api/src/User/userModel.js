var mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: (true, 'Enter username'),
      unique: true
    },
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },
    dateOfBirth: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', UserSchema)
