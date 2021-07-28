import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class AssignmentsService {
  async getAll(query = {}) {
    return await dbContext.Assignments.find(query)
      .populate('student', 'name')
      .populate('subject', 'name')
  }

  async getById(id) {
    const assignment = await dbContext.Assignments.findById(id)
    if (!assignment) {
      throw new BadRequest('Invalid Id')
    }
    return assignment
  }

  async create(body) {
    return await dbContext.Assignments.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const assignment = await dbContext.Assignments.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return assignment
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Assignments.findByIdAndDelete(id)
  }
}

export const assignmentsService = new AssignmentsService()
