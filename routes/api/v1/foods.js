const environment = process.env.NODE_ENV || 'development'
const express = require('express');
const router = express.Router();
const configuration = require('../../../knexfile')[environment]
const foodController = require('../../../controllers/foods_controller')
const foodWineCategories = require('../../../controllers/foods/wine_categories')

router.get('/', foodController.index)
router.get('/:id', foodController.show)
router.get('/:id/wine-categories', foodWineCategories.show)

module.exports = router
