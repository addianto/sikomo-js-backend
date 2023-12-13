import httpStatus from 'http-status'
import { helloService } from '../services/index.js'

export const helloController = {
  getHello: async (request, response) => {
    const name = request.body.name || 'Anonymous'
    const output = await helloService.sayHello(name)

    response
      .status(httpStatus.OK)
      .type('json')
      .json(output)
  }
}
