import mongoose from 'mongoose'
import AssignmentSchema from '../models/Assignment'
import StudentSchema from '../models/Student'
import StudentSubjectSchema from '../models/StudentSubject'
import SubjectSchema from '../models/Subject'

class DbContext {
  Assignments = mongoose.model('Assignment', AssignmentSchema)
  Students = mongoose.model('Student', StudentSchema)
  Subjects = mongoose.model('Subject', SubjectSchema)
  StudentSubjects = mongoose.model('StudentSubject', StudentSubjectSchema)
}

export const dbContext = new DbContext()
