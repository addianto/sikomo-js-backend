const httpStatus = require('http-status')
const { helloService } = require('../services')

const hello = (request, response) => {
  const name = request.body.name || 'Anonymous'
  const output = helloService.sayHello(name)

  response
    .status(httpStatus.OK)
    .type('json')
    .json({
      message: output
    })
}

module.exports = {
  hello
}
