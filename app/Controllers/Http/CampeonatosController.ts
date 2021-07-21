import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Campeonato from 'App/Models/Campeonato'

export default class CampeonatosController {
  public async index ({ response }: HttpContextContract) {
    const campeonatos = await Campeonato.all()

    return response.status(200).send(campeonatos)
  }

  public async store ({ request, response }: HttpContextContract) {
    const { nome, nome_curto, ano, status, imagem } = request.all()

    const campeonato = await Campeonato.create({ nome, nome_curto, ano, status, imagem })

    return response.status(200).send(campeonato)
  }

  public async show ({ params, response }: HttpContextContract) {
    const { id } = params

    const campeonato = await Campeonato.find(id)

    return response.status(200).send(campeonato)
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const { id }  = params

    const data = request.only(['nome', 'nome_curto', 'ano', 'status', 'imagem'])

    const campeonato = await Campeonato.findOrFail(id)

    campeonato.merge(data)

    await campeonato.save()

    return response.status(200).send(campeonato)
  }

  public async destroy({params, response}: HttpContextContract) {
    const { id } = params

    const campeonato = await Campeonato.findOrFail(id)

    await campeonato.delete()

    return response.status(204).send(campeonato)
  }
}
