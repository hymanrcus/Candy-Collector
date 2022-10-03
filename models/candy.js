import mongoose from 'mongoose'

const Schema = mongoose.Schema
const reviewSchema = new Schema({
  text: String,
  rating: Number,
  onwer: {type: Schema.Types.ObjectId, ref:"Profile"}
})

const candySchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  type: String,
  review: [reviewSchema],
}, {
  timestamps: true
})

const Candy = mongoose.model('Candy', candySchema)

export {
  Candy
}