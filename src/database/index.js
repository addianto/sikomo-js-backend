import { JSONPreset } from 'lowdb/node'

const databaseSchema = {
  animals: []
}

const database = await JSONPreset('db.json', databaseSchema)
