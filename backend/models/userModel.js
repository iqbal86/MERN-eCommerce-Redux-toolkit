import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter name'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please enter email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', userSchema)

export default User
