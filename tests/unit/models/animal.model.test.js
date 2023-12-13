import { animal } from '../../../src/models'

describe('Animal data model', () => {
  test('can add new entry when the data is empty', async () => {
    // Setup
    const testCaseInput = 'Cow'

    // Exercise
    const newAnimal = await animal.create(testCaseInput)

    // Verify
    expect(newAnimal.id).toBeDefined()
    expect(newAnimal.name).toBe('Cow')
  })
  test('can add new entry when the data is not empty', async () => {
    // Setup
    const existingSingleEntry = await animal.create('Cow')
    const testCaseInput = 'Horse'

    // Exercise
    const newAnimal = await animal.create(testCaseInput)

    // Verify
    expect(newAnimal.id).toBeGreaterThan(existingSingleEntry.id)
    expect(newAnimal.name).toBe('Horse')
  })
})
