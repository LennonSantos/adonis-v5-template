import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rodada from 'App/Models/Rodada'

export default class RodadasController {
  public async index ({ response }: HttpContextContract) {
    const times = await Rodada.all()

    return response.status(200).send(times)
  }

  public async store ({ request, response }: HttpContextContract) {
    const { nome, premio, status, campeonato_id } = request.all()

    const time = await Rodada.create({ nome, premio, status, campeonato_id })

    return response.status(200).send(time)
  }

  public async show ({ params, response }: HttpContextContract) {
    const { id } = params

    const time = await Rodada.find(id)

    return response.status(200).send(time)
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const { id }  = params

    const data = request.only(['nome', 'nome_curto', 'sigla', 'estado', 'cidade', 'estadio', 'imagem'])

    const time = await Rodada.findOrFail(id)

    time.merge(data)

    await time.save()

    return response.status(200).send(time)
  }

  public async destroy({params, response}: HttpContextContract) {
    const { id } = params

    const time = await Rodada.findOrFail(id)

    await time.delete()

    return response.status(204).send(time)
  }
}
