var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const cityController = require('../controllers/city')
const activityController = require('../controllers/activities')
const userController = require('../controllers/user')


//Home page
router.get('/', applicationController.index)

//About Page
router.get('/cities/about', applicationController.show)

//Add new city page
router.get('/cities/new', cityController.new)



//Show city page
router.get('/cities/:citiesId', cityController.show)

//Activities Show
router.get('/cities/:activitiesId', activityController.show)

//Users
router.get('/users/index', userController.index)








module.exports = router;
