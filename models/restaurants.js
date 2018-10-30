const mongoose = require('../db/connection')
const Schema = require('../db/schema')

const restaurantModel = mongoose.model('Restaurants', Schema.restaurantSchema)

module.exports = restaurantModel


