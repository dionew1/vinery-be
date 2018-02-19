const WineCategory = require('../../models/wine_category')

const show = function(req, res, next) {
  let id = req.params.id
  WineCategory.findFood(id)
  .then(function(foods) {
    if(!foods) {
      return res.sendStatus(404)
    } else {
      return res.json(foods)
    }
  })
}

module.exports = { show }
