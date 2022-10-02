import mongoose from 'mongoose'

const Schema = mongoose.Schema

const candySchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  type: String,
  // review: reviewSchema,
}, {
  timestamps: true
})

const Candy = mongoose.model('Candy', candySchema)

export {
  Candy
}