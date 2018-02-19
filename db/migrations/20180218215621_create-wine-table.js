exports.up = function(knex, Promise) {
  return knex.schema.createTable('Wine', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.string('description').notNullable();
    table.integer('wine_category_id').unsigned();
    table.foreign('wine_category_id').references('WineCategory.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Wine');
};
