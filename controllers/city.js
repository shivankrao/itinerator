const City = require('../models/cities')
const Activity = require('../models/activities')
const User = require('../models/users')
const Restaurant = require('../models/restaurants')

const cityController = {

    new: (req, res) => {
        res.render('cities/new' , { title: 'Itinerator' })
    },
}
module.exports = cityController