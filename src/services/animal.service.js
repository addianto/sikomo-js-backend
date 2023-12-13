import { animal } from '../models/index.js'

export const animalService = {
  findAnimalById: (id) => animal.getById(id),
  findAllAnimals: () => animal.getAll()
}
