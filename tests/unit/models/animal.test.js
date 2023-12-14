import { Animal } from '../../../src/models'

describe('Animal', () => {
  test('should create an animal object with valid id and name', () => {
    // Setup & Exercise
    const animal = Animal({ id: 1, name: 'Dog' })

    // Verify
    expect(animal.id).toBe(1)
    expect(animal.name).toBe('Dog')
  })

  test('should throw an error for invalid id', () => {
    expect(() => {
      // Setup & Exercise
      Animal({ id: true, name: 'Lion' })
    }).toThrow('Invalid ID: true') // Verify
  })

  test('should convert animal object to JSON', () => {
    // Setup & Exercise
    const animal = Animal({ id: 3, name: 'Elephant' })
    const json = animal.toJson()

    // Verify
    expect(json).toEqual({ id: 3, name: 'Elephant' })
  })
})
