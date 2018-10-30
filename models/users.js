const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    location: String,
    image: String,
    headline: String,
    favoriteActivity: [
        {
            type: String,
            ref: "Wingspot"
        }
    ]

})
module.exports = mongoose.model('User', User)