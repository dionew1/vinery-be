exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE "FoodWineCategory" CASCADE')
  .then(function () {
    return Promise.all([
      knex("FoodWineCategory").insert([
        { food_id: 1, wine_category_id: 1 },
        { food_id: 2, wine_category_id: 1 },
        { food_id: 5, wine_category_id: 1 },
        { food_id: 6, wine_category_id: 1 },
        { food_id: 3, wine_category_id: 2 },
        { food_id: 4, wine_category_id: 2 },
        { food_id: 10, wine_category_id: 2 },
        { food_id: 11, wine_category_id: 2 },
        { food_id: 3, wine_category_id: 3 },
        { food_id: 5, wine_category_id: 3 },
        { food_id: 6, wine_category_id: 3 },
        { food_id: 7, wine_category_id: 3 },
        { food_id: 8, wine_category_id: 3 },
        { food_id: 1, wine_category_id: 4 },
        { food_id: 3, wine_category_id: 4 },
        { food_id: 4, wine_category_id: 4 },
        { food_id: 5, wine_category_id: 4 },
        { food_id: 6, wine_category_id: 4 },
        { food_id: 2, wine_category_id: 5 },
        { food_id: 7, wine_category_id: 5 },
        { food_id: 8, wine_category_id: 5 },
        { food_id: 10, wine_category_id: 5 },
        { food_id: 2, wine_category_id: 6 },
        { food_id: 4, wine_category_id: 6 },
        { food_id: 5, wine_category_id: 6 },
        { food_id: 8, wine_category_id: 6 },
        { food_id: 9, wine_category_id: 6 },
        { food_id: 10, wine_category_id: 6 },
        { food_id: 4, wine_category_id: 7 },
        { food_id: 5, wine_category_id: 7 },
        { food_id: 9, wine_category_id: 7 },
        { food_id: 10, wine_category_id: 7 },
        { food_id: 3, wine_category_id: 8 },
        { food_id: 5, wine_category_id: 8 },
        { food_id: 10, wine_category_id: 8 },
        { food_id: 11, wine_category_id: 8 },
      ])
    ])
  })
}
