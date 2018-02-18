
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods CASCADE')
  return knex('foods').del()
    .then(function () {
      return Promis.all([
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
