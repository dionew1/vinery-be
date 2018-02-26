const Food = require('../../models/food')

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

module.exports = { show }
