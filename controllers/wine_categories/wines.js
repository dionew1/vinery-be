const WineCategory = require('../../models/wine_category')

const show = function(req, res, next) {
  let id = req.params.id
  WineCategory.findWine(id)
  .then(function(wineCategory) {
    if(!wineCategory) {
      return res.sendStatus(404)
    } else {
      return res.json(wineCategory)
    }
  })
}

module.exports = { show }
