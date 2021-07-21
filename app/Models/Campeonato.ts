import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Campeonato extends BaseModel {
  public static table = 'campeonatos'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public nome_curto: string

  @column()
  public ano: number

  @column()
  public status: string

  @column()
  public imagem: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
