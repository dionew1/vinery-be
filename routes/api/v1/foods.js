const environment = process.env.NODE_ENV || 'development'
const express = require('express');
const router = express.Router();
const configuration = require('../../../knexfile')[environment]
const foodController = require('../../../controllers/foods_controller')

router.get('')
