const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

const WineCategory = {
  all: function() {
    return database("WineCategory").select("*")
      .then(function(wineCategories) {
        return wineCategories
      })
  },

  findWine: function(wineCategoryId) {
    return database("Wine").where("wine_category_id", wineCategoryId)
      .then(function(wines) {
        return wines
      })
  },

  findFood: function(wineCategoryId) {
  return database("FoodWineCategory")
    .join("Food", "FoodWineCategory.food_id", "=", "Food.id")
    .where("wine_category_id", wineCategoryId)
    .then(function(foods) {
      return foods
    })
  }
}

module.exports = WineCategory
