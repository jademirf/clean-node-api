const MissingParamError = require('../helpers/missing-param-error')
const LoginRouter = require('./login-router')

const makeSut = () => {
  return new LoginRouter()
}

describe('Login Router', () => {
  test('Should return 400 if no email is provided.', () => {
    // sut = Single Unit Test
    const sut = makeSut()
    const httpRequest = {
      body: {
        password: 'anything'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided.', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'anything@teste.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 500 if no httpRequest is provided.', () => {
    const sut = makeSut()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if httpRequest has no body.', () => {
    const sut = makeSut()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should call AuthUseCase with right params.', () => {
    const sut = makeSut()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
