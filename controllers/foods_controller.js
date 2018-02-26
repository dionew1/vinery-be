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
  let foodId = req.params.id
  Food.find(foodId)
  .then(function(food) {
    if(!food) {
      return res.sendStatus(404)
    } else {
      return res.json(food)
    }
  })
}

module.exports = { index, show }
