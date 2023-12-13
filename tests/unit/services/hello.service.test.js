const { helloService } = require('../../../src/services')

describe('helloService', () => {
  describe('sayHello()', () => {
    test('should return the correct message when input is present', () => {
      // Setup
      const testCaseInput = 'Alice'

      // Exercise
      const testCaseOutput = helloService.sayHello(testCaseInput)

      // Verify
      expect(testCaseOutput).toBe('Hello, Alice')
    })
    test('should return the correct message when input is empty', () => {
      // No setup since the input is empty

      // Exercise
      const testCaseOutput = helloService.sayHello()

      // Verify
      expect(testCaseOutput).toBe('Hello, Anonymous')
    })
  })
})
