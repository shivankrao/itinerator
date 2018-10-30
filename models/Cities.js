const mongoose = require('../db/connection')
const Activity = require('../models/activities')
const User = require('../models/users')
const Restaurant = require('../models/restaurants')
const Schema = mongoose.Schema

const City = new Schema({
	name: String,
	description: String,
    activities: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ],
    restaurants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Restaurant"
        }
    ],
	img: String,
})


module.exports = mongoose.model('City', City)