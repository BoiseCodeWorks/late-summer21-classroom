import { subjectsService } from '../services/SubjectsService'
import BaseController from '../utils/BaseController'

export class SubjectsController extends BaseController {
  constructor() {
    super('api/subjects')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const subjects = await subjectsService.getAll(req.query)
      res.send(subjects)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const subject = await subjectsService.getById(req.params.id)
      res.send(subject)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const subject = await subjectsService.create(req.body)
      res.send(subject)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const subject = await subjectsService.edit(req.body)
      res.send(subject)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const subject = await subjectsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
