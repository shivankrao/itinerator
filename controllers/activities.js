const express = require('express')
const router = express.Router()
const City = require('../models/cities')
const Activity = require('../models/activities')
const User = require('../models/users')

const activityController = { 
    show: (req, res) => {
    const activitiesId = req.params.activitiesId
    Activity.findById(activitiesId).populate().then((activities) => {
      res.render('activities/show', {
        activities: activities, title: 'Itinerator' 
    })
    // res.send(cities)
})   

}
}

module.exports = activityController