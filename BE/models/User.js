import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: (true, 'Enter username'),
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer'
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', UserSchema)

export default User
