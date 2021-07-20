import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Campeonatos extends BaseSchema {
  protected tableName = 'campeonatos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome')
      table.string('nome_curto')
      table.integer('ano')
      table.enum('status', ['aguardando', 'andamento', 'finalizado'])
      table.string('imagem')
      table.unique(['nome', 'ano'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
