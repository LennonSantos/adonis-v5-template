import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Times extends BaseSchema {
  protected tableName = 'times'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('campeonato_id')
      table.string('nome')
      table.string('nome_curto')
      table.string('sigla')
      table.string('estado')
      table.string('cidade')
      table.string('estadio')
      table.string('imagem')
      table
        .foreign('campeonato_id')
        .references('campeonatos.id')
        .onDelete('CASCADE')

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