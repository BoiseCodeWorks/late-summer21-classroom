import BaseController from '../utils/BaseController'
import { valuesService } from '../services/ValueService'

export class ValuesController extends BaseController {
  constructor() {
    super('api/values')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const values = await valuesService.find()
      return res.send(values)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const value = await valuesService.create(req.body)
      res.send(value)
    } catch (error) {
      next(error)
    }
  }
}
