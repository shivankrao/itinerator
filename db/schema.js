const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitiesSchema = new Schema({
    name: String,
    description: String,
    location: String,

})

const restaurantSchema = new Schema({
    name: String,
    description: String,
    location: String,
    priceRange: String,
})

const citySchema = new Schema({
	name: String,
	description: String,
    activities: [activitiesSchema],
    restaurants: [restaurantSchema],
	img: String,
})

module.exports = {
    activitiesSchema,
    restaurantSchema,
    citySchema
}