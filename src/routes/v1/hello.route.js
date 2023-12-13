const express = require('express')
const helloController = require('../../controllers/hello.controller')

const router = express.Router()

router.get(
  '/', helloController.hello
)

module.exports = router
