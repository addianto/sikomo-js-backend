import config from '../config/index.js'
import { JSONPreset } from 'lowdb/node'

const schema = {
  animals: [],
  greetings: []
}

let instance = null

const createInstance = async () => {
  return JSONPreset(config.dbFilePath, schema)
}

export const Database = {
  getInstance: async () => {
    if (!instance) {
      instance = await createInstance()
    }

    return instance
  },
  reset: () => {
    instance = null
  }
}
