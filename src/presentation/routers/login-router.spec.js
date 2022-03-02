class LoginRouter {
  route () {
    return {
      statusCode: 400
    }
  }
}

describe('Login Router', () => {
  test('Should return 400 if no email is provided.', () => {
    // sut = Single Unit Test
    const sut = new LoginRouter()
    const httpRequest = {
      password: 'anything'
    }
    sut.route(httpRequest)
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
