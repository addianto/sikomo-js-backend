import { animalService } from '../../../src/services'
import { animal } from '../../../src/models'

describe('animalService', () => {
  describe('findAnimalById()', () => {
    test('can find an animal by its id', async () => {
      // Setup
      animal.create('Cat')
      animal.create('Dog')
      const testCaseInput = '1' // Corresponds to the first entry, i.e., Cat

      // Exercise
      const testCaseOutput = animalService.findAnimalById(testCaseInput)

      // Verify
      expect(testCaseOutput).toStrictEqual({
        id: 1,
        name: 'Cat'
      })
    })
  })
})
