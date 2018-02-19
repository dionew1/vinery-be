exports.up = function(knex, Promise) {
  return knex.schema.createTable('FoodWineCategory', (table) => {
    table.increments('id').primary();
    table.integer('food_id').unsigned();
    table.foreign('food_id').references('Food.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
    table.integer('wine_category_id').unsigned();
    table.foreign('wine_category_id').references('WineCategory.id')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('FoodWineCategory');
};
