import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Assignment = new Schema(
  {
    description: { type: String, required: true },
    link: { type: String },
    studentId: { type: ObjectId, ref: 'Student' },
    subjectId: { type: ObjectId, ref: 'Subject' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// name of the virtual property to be made
Assignment.virtual('student', {
  // local property name
  localField: 'studentId',
  // collection its a refrence to
  ref: 'Student',
  // collection being refrenced property name
  foreignField: '_id',
  justOne: true
})

Assignment.virtual('subject', {
  localField: 'subjectId',
  ref: 'Subject',
  foreignField: '_id',
  justOne: true
})

export default Assignment
