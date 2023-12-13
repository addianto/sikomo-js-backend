import config from '../config/index.js'
import { JSONPreset } from 'lowdb/node'

const db = await JSONPreset(
  config.dbFilePath,
  {
    greetings: [
      { name: 'Anonymous', message: 'Hello, Anonymous' }
    ]
  }
)

const { greetings } = db.data

export const helloService = {
  sayHello: async (name) => {
    const greetingName = (!name) ? 'Anonymous' : name
    const foundGreeting = greetings.find((greeting) => greeting.name === greetingName)

    if (foundGreeting) {
      return foundGreeting
    }

    const newGreeting = { name, message: `Hello, ${name}` }
    greetings.push(newGreeting)

    await db.write()

    return newGreeting
  }
}
