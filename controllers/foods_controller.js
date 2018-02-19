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

const show = function(req, res, next) {
  let id = req.params.id
  Food.findWineCategories(id)
  .then(function(wineCategories) {
    if(!wineCategories) {
      return res.sendStatus(404)
    } else {
      return res.json(wineCategories)
    }
  })
}

module.exports = { index, show }
