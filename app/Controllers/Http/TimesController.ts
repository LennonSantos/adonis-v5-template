import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Time from 'App/Models/Time'

export default class TimesController {
  public async index ({ response }: HttpContextContract) {
    const times = await Time.all()

    return response.status(200).send(times)
  }

  public async store ({ request, response }: HttpContextContract) {
    const { nome, nome_curto, sigla, estado, cidade, estadio, imagem } = request.all()

    const time = await Time.create({ nome, nome_curto, sigla, estado, cidade, estadio, imagem })

    return response.status(200).send(time)
  }

  public async show ({ params, response }: HttpContextContract) {
    const { id } = params

    const time = await Time.find(id)

    return response.status(200).send(time)
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const { id }  = params

    const data = request.only(['nome', 'nome_curto', 'sigla', 'estado', 'cidade', 'estadio', 'imagem'])

    const time = await Time.findOrFail(id)

    time.merge(data)

    await time.save()

    return response.status(200).send(time)
  }

  public async destroy({params, response}: HttpContextContract) {
    const { id } = params

    const time = await Time.findOrFail(id)

    await time.delete()

    return response.status(204).send(time)
  }
}
