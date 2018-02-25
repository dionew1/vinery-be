
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('Food', (table) => {
    table.string('image_url')
  }).then(() => {
    return knex('Food').where({ id: 1 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/raw-vegetables-by-anna-pelzer.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 2 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/cooked-vegetables-by-monika-grabkowska.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 3 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/soft-cheese.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 4 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/hard-cheese.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 5 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/starches.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 6 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/lean-fish.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 7 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/rich-fish-caroline-attwood.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 8 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/white-meat.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 9 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/red-meat.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 10 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/cured-meat.jpg' })
  }).then(() => {
    return knex('Food').where({ id: 11 }).update(
      { image_url: 'https://vinery-be.herokuapp.com/images/dessert.jpg' })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('Food', (table) => {
    table.dropColumn('image_url')
  })
};
