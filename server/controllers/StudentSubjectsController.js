import { studentSubjectsService } from '../services/StudentSubjectsService'
import BaseController from '../utils/BaseController'

export class StudentSubjectsController extends BaseController {
  constructor() {
    super('api/studentSubjects')
    this.router
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async create(req, res, next) {
    try {
      const studentSubject = await studentSubjectsService.create(req.body)
      res.send(studentSubject)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const studentSubject = await studentSubjectsService.edit(req.body)
      res.send(studentSubject)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await studentSubjectsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
