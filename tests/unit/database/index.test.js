import { Database } from '../../../src/database'

describe('Database', () => {
  beforeEach(() => {
    // Reset the instance before each test
    Database.reset()
  })

  it('should create a new instance if it does not exist', async () => {
    const instance = await Database.getInstance()
    expect(instance).toBeDefined()
  })

  it('should return the same instance if it already exists', async () => {
    const instance1 = await Database.getInstance()
    const instance2 = await Database.getInstance()
    expect(instance1).toBe(instance2)
  })
})
