const mongoose = require('../db/connection')
const Schema = require('../db/schema')

const activitiesModel = mongoose.model('Activities', Schema.activitiesSchema)


module.exports = activitiesModel