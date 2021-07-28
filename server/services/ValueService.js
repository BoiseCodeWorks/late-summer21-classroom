import { BadRequest } from '../utils/Errors'

class ValuesService {
  async create(valueData) {
    if (!valueData) { throw new BadRequest('Invalid value data') }
    // left intentionally useless
    return valueData
  }

  async find(query = {}) {
    // left intentionally useless
    return ['value1', 'value2']
  }
}

export const valuesService = new ValuesService()
