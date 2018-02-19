const Food = require('../models/food')

const index = function(req, res, next) {
  Food.all()
  .then(function(foods) {
    if(!foods) {
      return res.sendStatus(404)
    } else {
      return res.json(foods)
    }
  })
}

module.exports = { index }
