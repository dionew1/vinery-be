exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE "WineCategory" CASCADE')
  .then(function () {
    return Promise.all([
      knex("WineCategory").insert([
        { name: "Dry White" },
        { name: "Sweet White" },
        { name: "Rich White" },
        { name: "Sparkling" },
        { name: "Light Red" },
        { name: "Medium Red" },
        { name: "Bold Red" },
        { name: "Dessert" },
      ])
    ])
  })
}
