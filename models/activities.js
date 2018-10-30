const mongoose = require('../db/connection')
const Schema = require('../db/schema')

const activitiesModel = mongoose.model('Things To Do', Schema.activitiesSchema)


module.exports = activitiesModel