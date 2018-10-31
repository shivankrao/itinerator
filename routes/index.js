var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const cityController = require('../controllers/city')


//Home page
router.get('/', applicationController.index)

//Add new city
router.get('/cities/new', cityController.new)

//
router.get('/cities/:citiesId', cityController.show)


module.exports = router;
