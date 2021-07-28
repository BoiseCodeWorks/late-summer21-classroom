import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Subject = new Schema(
  {
    name: { type: String, required: true },
    department: { type: String, enum: ['math', 'science', 'arts', 'social studies', 'other'], required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Subject
