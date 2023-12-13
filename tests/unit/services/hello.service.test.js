import { helloService } from '../../../src/services'

describe('helloService', () => {
  describe('sayHello()', () => {
    test('should return the correct message when input is present', async () => {
      // Setup
      const testCaseInput = 'Alice'

      // Exercise
      const testCaseOutput = await helloService.sayHello(testCaseInput)

      // Verify
      expect(testCaseOutput).toStrictEqual({
        name: 'Alice',
        message: 'Hello, Alice'
      })
    })
    test('should return the correct message when input is empty', async () => {
      // No setup since the input is empty

      // Exercise
      const testCaseOutput = await helloService.sayHello()

      // Verify
      expect(testCaseOutput).toStrictEqual({
        name: 'Anonymous',
        message: 'Hello, Anonymous'
      })
    })
  })
})
