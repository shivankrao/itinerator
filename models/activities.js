const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Activity = new Schema({
    name: String,
    description: String,
    location: String,
    price: String,
}) 

module.exports = mongoose.model('Activity', Activity)


