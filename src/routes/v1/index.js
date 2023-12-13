import express from 'express'
import { helloRoute } from './hello.route.js'

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

export default router
