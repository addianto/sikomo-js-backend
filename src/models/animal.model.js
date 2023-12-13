import config from '../config/index.js'
import { JSONPreset } from 'lowdb/node'

const db = await JSONPreset(config.dbFilePath, { animals: [] })
const { animals } = db.data

export const animal = {
  create: async (name) => {
    // TODO Implement alternative path to avoid adding duplicate animals
    const endIndex = animals.length - 1
    const newAnimal = (endIndex === -1) ? { id: 1, name } : { id: animals[endIndex].id + 1, name }

    animals.push(newAnimal)
    await db.write()

    return newAnimal
  },
  getById: (id) => {
    // TODO Implement error handling when cannot find animal by ID
    const integerId = (typeof id === 'number') ? id : parseInt(id, 10)
    const foundAnimal = animals.find((animal) => animal.id === integerId)

    return foundAnimal
  },
  getAll: () => animals
}
