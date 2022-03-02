class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email || !httpRequest.body.passasdfaswords) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  test('Should return 400 if no email is provided.', () => {
    // sut = Single Unit Test
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'anything'
      }
    }
    sut.route(httpRequest)
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if no password is provided.', () => {
    // sut = Single Unit Test
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'anything@teste.com'
      }
    }
    sut.route(httpRequest)
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
