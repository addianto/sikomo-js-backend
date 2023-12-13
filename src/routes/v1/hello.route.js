import express from 'express'
import { helloController } from '../../controllers/hello.controller.js'

const router = express.Router()

router.get(
  '/', helloController.getHello
)

export const helloRoute = router
