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

const show = function(req, res, next) {
  let id = req.params.id
  WineCategory.find(id)
  .then(function(wineCategory) {
    if(!wineCategory) {
      return res.sendStatus(404)
    } else {
      return res.json(wineCategory)
    }
  })
}

module.exports = { index, show }
