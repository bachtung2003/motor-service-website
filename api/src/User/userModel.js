var mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: (true, 'Enter username'),
      unique: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', UserSchema)
