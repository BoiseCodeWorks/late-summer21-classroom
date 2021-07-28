import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StudentSubjectsService {
  async getAll(query = {}) {
    return await dbContext.StudentSubjects.find(query)
  }

  async getById(id) {
    const studentSubject = await dbContext.StudentSubjects.findById(id)
    if (!studentSubject) {
      throw new BadRequest('Invalid Id')
    }
    return studentSubject
  }

  async create(body) {
    return await dbContext.StudentSubjects.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const studentSubject = await dbContext.StudentSubjects.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return studentSubject
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.StudentSubjects.findByIdAndDelete(id)
  }
}

export const studentSubjectsService = new StudentSubjectsService()
