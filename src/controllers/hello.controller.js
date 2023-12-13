import httpStatus from 'http-status'
import { helloService } from '../services/index.js'

export const helloController = {
  getHello: (request, response) => {
    const name = request.body.name || 'Anonymous'
    const output = helloService.sayHello(name)

    response
      .status(httpStatus.OK)
      .type('json')
      .json({
        message: output
      })
  }
}
