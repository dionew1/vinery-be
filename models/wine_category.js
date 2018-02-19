const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

let WineCategory = {
  all: function() {
    return database("WineCategory").select("*")
      .then(function(wineCategories) {
        return wineCategories
      })
  },

  find: function(wineCategoryId) {
    return database("Wine").where("wine_category_id", wineCategoryId)
      .then(function(wines) {
        return wines
      })
  }

}

module.exports = WineCategory
