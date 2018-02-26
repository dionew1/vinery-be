const environment = process.env.NODE_ENV || 'development'
const express = require('express');
const router = express.Router();
const configuration = require('../../../knexfile')[environment]
const wineCategoriesController = require('../../../controllers/wine_categories_controller')
const wineCategoriesWine = require('../../../controllers/wine_categories/wines')
const wineCategoriesFood = require('../../../controllers/wine_categories/foods')

router.get('/', wineCategoriesController.index)
router.get('/:id', wineCategoriesController.show)
router.get('/:id/wines', wineCategoriesWine.show)
router.get('/:id/foods', wineCategoriesFood.show)

module.exports = router
