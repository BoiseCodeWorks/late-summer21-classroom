import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StudentsService {
  async getAll(query = {}) {
    return await dbContext.Students.find(query)
  }

  async getById(id) {
    const student = await dbContext.Students.findById(id)
    if (!student) {
      throw new BadRequest('Invalid Id')
    }
    return student
  }

  async create(body) {
    return await dbContext.Students.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const student = await dbContext.Students.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return student
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Students.findByIdAndDelete(id)
  }
}

export const studentsService = new StudentsService()
