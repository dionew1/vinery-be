const environment = process.env.NODE_ENV || 'development'
const express = require('express');
const router = express.Router();
const configuration = require('../../../knexfile')[environment]
const wineCategoriesController = require('../../../controllers/wine_categories_controller')


router.get('/', wineCategoriesController.index)
router.get('/:id/wines', wineCategoriesController.show)

module.exports = router
