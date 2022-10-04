import mongoose from 'mongoose'

const Schema = mongoose.Schema
const reviewSchema = new Schema({
  text: String,
  rating: Number,
  owner: {type: Schema.Types.ObjectId, ref:"Profile"}
}, {
  timestamps: true
})

const candySchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  type: String,
  reviews: [reviewSchema],
}, {
  timestamps: true
})

const Candy = mongoose.model('Candy', candySchema)

export {
  Candy
}