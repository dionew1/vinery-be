const WineCategory = require('../models/wine_category')

const index = function(req, res, next) {
  WineCategory.all()
  .then(function(wineCategories) {
    if(!wineCategories) {
      return res.sendStatus(404)
    } else {
      return res.json(wineCategories)
    }
  })
}

module.exports = { index }
