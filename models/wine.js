const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

let Wine = {
  all: function() {
    return database("Wine").select("*")
      .then(function(wines) {
        return wines
      })
  },

  find: function(id) {
    return database("Wine").where("id", id)
      .then(function(wine) {
        return wine[0]
      })
  }
}

module.exports = Wine
