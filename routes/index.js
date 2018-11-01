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
//Show users
router.get('/users', userController.index)
//Create new user
router.post('/new', userController.new)
//Post new user
router.get('/users/new', userController.new)
//Shows users page
router.post('/users', userController.create)
//individual users page
router.get('/users/:id', userController.show)
//update user page
router.get('/users/:usersId/edit', userController.edit)
//update user
router.patch('/users/:usersId', userController.update)
//delete user 
router.delete('/users/:id', userController.delete)

//new activity
router.get('/users/:usersId/activities/new', activityController.new)
//individual user activities
router.post('/users/:usersId/activities', activityController.create)
//individual activities
router.get('/users/:id/activities/:activitiesId', activityController.show)
//edit activities
router.get('/users/:usersId/activities/:activitiesId/edit', activityController.edit)
//update activities
router.patch('/activities/:usersId', activityController.update)
//delete activities
router.delete('/activities/:usersId', activityController.delete)


module.exports = router;
