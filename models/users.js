const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    location: String,
    image: String,
    headline: String,
    favoriteActivity: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ]
})
module.exports = mongoose.model('User', User)