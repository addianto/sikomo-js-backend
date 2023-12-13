const express = require('express')
const helloRoute = require('./hello.route')
const router = express.Router()

const defaultRoutes = [
  {
    path: '/hello',
    route: helloRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
