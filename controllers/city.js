const City = require('../models/cities')
const Activity = require('../models/cities')
const User = require('../models/users')
const Restaurant = require('../models/restaurants')

const cityController = {

 new: (req, res) => {
    console.log(req.params.id)
res.render('cities/new')
},

}

module.exports = cityController