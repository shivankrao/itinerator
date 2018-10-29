const mongoose = require('mongoose')
const Schema = mongoose.Schema


const thingsToDoSchema = new Schema({
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
    thingToDo: [thingsToDoSchema],
    restaurants: [restaurantSchema],
	img: String,
})

module.exports = {
    thingsToDoSchema,
    restaurantSchema,
    citySchema
}