import * as Knex from 'knex'

exports.up = async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').notNullable().defaultTo(knex.raw('gen_random_uuid()')).primary();
    table.string('first_name', 100);
    table.string('last_name', 100);
    table.string('password_hash', 128);
    table.timestamps(true, true);
  })

  await knex.schema.createTable('contacts', (table) => {
    table.uuid('id').notNullable().defaultTo(knex.raw('gen_random_uuid()')).primary();
    table.uuid('user_id').notNullable().references('id').inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.string('type');
    table.string('contact').notNullable();
    table.boolean('verified').notNullable().defaultTo(false);
    table.timestamps(true, true);
    table.unique(['user_id', 'contact', 'verified']);
  })
}

exports.down = async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('contacts')
  await knex.schema.dropTableIfExists('users')
}
