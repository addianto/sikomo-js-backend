import express from 'express'
import { animalRoute } from './animal.route.js'
import { helloRoute } from './hello.route.js'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/animals',
    route: animalRoute
  },
  {
    path: '/hello',
    route: helloRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
