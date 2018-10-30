var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application')
const cityController = require('../controllers/city')


/* GET home page. */
router.get('/', applicationController.index)
router.get('/new', cityController.create)

module.exports = router;
