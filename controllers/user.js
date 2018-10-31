const express = require('express')
const router = express.Router()
const User = require('../models/users')


//get users

const userController = {

 index: (req, res) => {
    User.find({})
        .then((users) => {
            res.render('users/index', {title: "Itinerator", users})
        })
        .catch((err) => {
            console.log(err)
        })


},

new: (req, res) => {
    res.render('users/new'), {title: "Itinerator", users}
},




}
module.exports = userController