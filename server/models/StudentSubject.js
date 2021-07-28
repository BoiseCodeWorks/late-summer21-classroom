import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const StudentSubject = new Schema(
  {
    grade: { type: String, enum: ['A', 'B', 'C', 'D', 'F'], default: 'F' },
    studentId: { type: ObjectId, ref: 'Student' },
    subjectId: { type: ObjectId, ref: 'Subject' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

StudentSubject.virtual('student', {
  localField: 'studentId',
  ref: 'Student',
  foreignField: '_id',
  justOne: true
})

StudentSubject.virtual('subject', {
  localField: 'subjectId',
  ref: 'Subject',
  foreignField: '_id',
  justOne: true
})

export default StudentSubject
