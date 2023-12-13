import express from 'express'
import { animalController } from '../../controllers/animal.controller.js'

const router = express.Router()

router.get(
  '/', animalController.listAnimals
)

export const animalRoute = router
