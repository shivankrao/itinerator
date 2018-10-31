const City = require('../models/cities')
const Activity = require('../models/activities')
const User = require('../models/users')

// const Restaurant = require('../models/restaurants')

const applicationController = {
    
    index: (req, res, next) => {
        City.find({})
            .then(cities => {
            res.render('index', { 
                 cities: cities, title: 'Itinerator' 
            })
            // res.send(cities)
        })       
    },
    show: (req, res, next) => {
        res.render('about', { title: 'Itinerator' });
 
},

    create: (req, res) => {
    City.create(req.body).then(newCity =>
        res.redirect(`/${newCity._id}`))
    },

}

module.exports = applicationController