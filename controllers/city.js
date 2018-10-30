const City = require('../models/cities')
const Activity = require('../models/cities')
const User = require('../models/users')
const Restaurant = require('../models/restaurants')

const cityController = {

 create: (req, res) => {
    City.create({
        name: req.body.name,
        description: req.body.location,
        activities: req.body.activities,
        restaurants: req.body.restaurants,
        img: req.body.img,

    }).then(cities => {

      res.redirect(`/city/${cities._id}`)
    })
  },

}

module.exports = cityController