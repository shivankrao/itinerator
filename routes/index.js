var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const cityController = require('../controllers/city')
const activityController = require('../controllers/activities')


//Home page
router.get('/', applicationController.index)

//Add new city
router.get('/cities/new', cityController.new)

//Show city page
router.get('/cities/:citiesId', cityController.show)

//Activities Show
router.get('/cities/:activitiesId', activityController.show)




module.exports = router;
