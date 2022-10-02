import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
  email: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

export {
  User
}
