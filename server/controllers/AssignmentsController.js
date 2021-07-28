import { assignmentsService } from '../services/AssignmentsService'
import BaseController from '../utils/BaseController'

export class AssignmentsController extends BaseController {
  constructor() {
    super('api/assignments')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const assignments = await assignmentsService.getAll(req.query)
      res.send(assignments)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const assignment = await assignmentsService.getById(req.params.id)
      res.send(assignment)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const assignment = await assignmentsService.create(req.body)
      res.send(assignment)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const assignment = await assignmentsService.edit(req.body)
      res.send(assignment)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const assignment = await assignmentsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
