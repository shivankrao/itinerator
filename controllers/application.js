const City = require('../models/cities')
const Activity = require('../models/activities')
const User = require('../models/users')
const Restaurant = require('../models/restaurants')

const applicationController = {
    
    index: (req, res, next) => {
        City.find()
            .then(cities => {
            res.render('index', { title: 'Itinerator' }, { cities: cities })
        })       
    },
    show: (req, res, next) => {
        res.render('about', { title: 'Itinerator' });
 
}

}

module.exports = applicationController