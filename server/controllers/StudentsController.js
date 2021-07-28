import { assignmentsService } from '../services/AssignmentsService'
import { studentsService } from '../services/StudentsService'
import { subjectsService } from '../services/SubjectsService'
import BaseController from '../utils/BaseController'

export class StudentsController extends BaseController {
  constructor() {
    super('api/students')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/assignments', this.getAssignmentsByStudentId)
      .get('/:id/subjects', this.getSubjectsByStudentId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const students = await studentsService.getAll(req.query)
      res.send(students)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const student = await studentsService.getById(req.params.id)
      res.send(student)
    } catch (error) {
      next(error)
    }
  }

  async getAssignmentsByStudentId(req, res, next) {
    try {
      const assignments = await assignmentsService.getAll({ studentId: req.params.id })
      res.send(assignments)
    } catch (error) {
      next(error)
    }
  }

  async getSubjectsByStudentId(req, res, next) {
    try {
      const subjects = await subjectsService.getAllByStudent(req.params.id)
      res.send(subjects)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const student = await studentsService.create(req.body)
      res.send(student)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const student = await studentsService.edit(req.body)
      res.send(student)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const student = await studentsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
