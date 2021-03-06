const express = require('express')
const router = express.Router()
const City = require('../models/Cities')
const Activity = require('../models/activities')
const User = require('../models/users')
// const Restaurant = require('../models/restaurants')

const cityController = {

    new: (req, res) => {
        res.render('cities/new', {title: "Itinerator"})
    },


    create: (req, res) => {
    City.create(req.body).then(newCity =>
        res.redirect(`/${newCity._id}`))
    },

    show: (req, res) => {
    const citiesId = req.params.citiesId
    City.findById(citiesId).populate("activities").then((cities) => {
      res.render('cities/show', {
        cities: cities, title: 'Itinerator' 
    })
    // res.send(cities)
})       
},

    
}


module.exports = cityController