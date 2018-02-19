const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

let WineCategory = {
  all: function () {
    return database("WineCategory").select("*")
      .then(function(wineCategories) {
        return wineCategories
      })
  }
}

module.exports = WineCategory
