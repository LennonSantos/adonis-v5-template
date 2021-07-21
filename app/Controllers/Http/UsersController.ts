// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ auth }) {
    return auth.id
  }

  public async auth({ request, auth, response }) {
    const { email, password } = request.all()

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '2days',
      })

      return token
    } catch {
      return response.badRequest('Email ou senha incorretos!')
    }
  }

  public async create({ request }) {
    const { email, password } = request.all()

    const user = await User.create({
      email: email,
      password: password,
    })

    return user
  }
}
