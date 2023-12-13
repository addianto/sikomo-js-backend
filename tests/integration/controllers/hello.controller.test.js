import httpMocks from 'node-mocks-http'

import { helloController } from '../../../src/controllers'

describe('helloController', () => {
  describe('HTTP GET /hello using mocked request & response', () => {
    test('should return the correct response when input is present', async () => {
      // Setup
      const mockRequest = httpMocks.createRequest({
        method: 'GET',
        body: {
          name: 'Alice'
        }
      })
      const expectedResponse = httpMocks.createResponse()

      // Exercise
      await helloController.getHello(mockRequest, expectedResponse)

      // Verify
      const jsonData = expectedResponse._getJSONData()
      expect(expectedResponse.statusCode).toBe(200)
      expect(jsonData.name).toBe('Alice')
      expect(jsonData.message).toBe('Hello, Alice')
    })
    test('should return the correct response when input is empty', async () => {
      // Setup
      const mockRequest = httpMocks.createRequest({
        method: 'GET'
      })
      const expectedResponse = httpMocks.createResponse()

      // Exercise
      await helloController.getHello(mockRequest, expectedResponse)

      // Verify
      const jsonData = expectedResponse._getJSONData()
      expect(expectedResponse.statusCode).toBe(200)
      expect(jsonData.name).toBe('Anonymous')
      expect(jsonData.message).toBe('Hello, Anonymous')
    })
  })
})
