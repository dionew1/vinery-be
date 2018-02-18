
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods CASCADE')
  .then(function () {
    return Promise.all([
      knex('foods').insert([
        { name: "Vegetables" },
        { name: "Roasted Vegetables" },
        { name: "Soft Cheese" },
        { name: "Hard Cheese" },
        { name: "Starches" },
        { name: "Fish" },
        { name: "Rich Fish" },
        { name: "White Meat" },
        { name: "Red Meat" },
        { name: "Cured Meat" },
        { name: "Sweets" },
      ])
    ])
  })
}
