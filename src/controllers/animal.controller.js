import httpStatus from 'http-status'
import { animalService } from '../services/index.js'

export const animalController = {
  listAnimals: (request, response) => {
    const animals = animalService.findAllAnimals()

    response
      .status(httpStatus.OK)
      .type('json')
      .json(animals)
  }
}
