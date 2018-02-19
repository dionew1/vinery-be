const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

const Food = {
  all: function() {
    return database("Food").select("*")
      .then(function(foods) {
        return foods
      })
  },

  findWineCategories: function(foodId) {
    return database("FoodWineCategory")
    .join("WineCategory", "FoodWineCategory.wine_category_id", "=", "WineCategory.id")
    .where("food_id", foodId)
    .then(function(wineCategories) {
      return wineCategories
    })
  }
}

module.exports = Food
