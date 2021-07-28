import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SubjectsService {
  async getAllByStudent(studentId) {
    const studentSubjects = await dbContext.StudentSubjects.find({ studentId })
      .populate('subject')
    const subjects = studentSubjects.map(ss => {
      return {
        subject: ss.subject,
        studentSubjectsId: ss.id,
        grade: ss.grade
      }
    })
    return subjects
  }

  async getAll(query = {}) {
    return await dbContext.Subjects.find(query)
  }

  async getById(id) {
    const subject = await dbContext.Subjects.findById(id)
    if (!subject) {
      throw new BadRequest('Invalid Id')
    }
    return subject
  }

  async create(body) {
    return await dbContext.Subjects.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const subject = await dbContext.Subjects.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return subject
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Subjects.findByIdAndDelete(id)
  }
}

export const subjectsService = new SubjectsService()
