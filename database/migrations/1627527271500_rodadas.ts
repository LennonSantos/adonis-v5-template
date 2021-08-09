import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rodadas extends BaseSchema {
  protected tableName = 'rodadas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome')
      table.string('status')
      table.integer('premio')
      table.integer('campeonato_id')
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
