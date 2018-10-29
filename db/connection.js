const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI); 

mongoose.connect('mongodb://localhost/store-samples')

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})
mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error!!! ${error}`)
    process.exit(-1)
})

module.exports = mongoose
