const environment = process.env.NODE_ENV || 'development'
const express = require('express');
const router = express.Router();
const configuration = require('../../../knexfile')[environment]
const wineController = require('../../../controllers/wines_controller')

router.get('/', wineController.index)
router.get('/:id', wineController.show)

module.exports = router
