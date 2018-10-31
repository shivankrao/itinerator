const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    username: String,
    location: String,
    image: String,
    favoriteActivity: [
        {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        }
    ]
})
module.exports = mongoose.model('User', User)