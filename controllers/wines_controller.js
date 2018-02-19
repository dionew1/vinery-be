const Wine = require('../models/wine')

const index = function(req, res, next) {
  Wine.all()
  .then(function(wines) {
    if(!wines) {
      return res.sendStatus(404)
    } else {
      return res.json(wines)
    }
  })
}

const show = function(req, res, next) {
  let id = req.params.id

  Wine.find(id)
  .then(function(wine) {
    if(!wine) {
      return res.sendStatus(404)
    } else {
      return res.json(wine)
    }
  })
}

module.exports = { index, show }
