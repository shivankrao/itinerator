const mongoose = require('../db/connection')
const Schema = require('../db/schema')

const cityModel = mongoose.model('City', Schema.citySchema)

module.exports = cityModel