const environment   = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database      = require('knex')(configuration)

const Food = {
  all: function() {
    return database("Food").select("*")
      .then(function(foods) {
        return foods
      })
  }
}

module.exports = Food
