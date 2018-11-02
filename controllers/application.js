const City = require('../models/Cities')
const Activity = require('../models/activities')
const User = require('../models/users')


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

    

}

module.exports = applicationController