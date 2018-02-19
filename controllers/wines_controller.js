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

module.exports = { index }
