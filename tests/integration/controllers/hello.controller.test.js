import httpMocks from 'node-mocks-http'

import { helloController } from '../../../src/controllers'

describe('helloController', () => {
  describe('HTTP GET /hello using mocked request & response', () => {
    test('should return the correct response when input is present', () => {
      // Setup
      const mockRequest = httpMocks.createRequest({
        body: {
          name: 'Alice'
        }
      })
      const expectedResponse = httpMocks.createResponse()

      // Exercise
      helloController.getHello(mockRequest, expectedResponse)

      // Verify
      const jsonData = expectedResponse._getJSONData()
      expect(expectedResponse.statusCode).toBe(200)
      expect(jsonData.message).toBe('Hello, Alice')
    })
    test('should return the correct response when input is empty', () => {
      // Setup
      const mockRequest = httpMocks.createRequest()
      const expectedResponse = httpMocks.createResponse()

      // Exercise
      helloController.getHello(mockRequest, expectedResponse)

      // Verify
      const jsonData = expectedResponse._getJSONData()
      expect(expectedResponse.statusCode).toBe(200)
      expect(jsonData.message).toBe('Hello, Anonymous')
    })
  })
})
