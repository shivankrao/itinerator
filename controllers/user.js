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

// get new user
new: (req, res) => {
    res.render('users/new', {title: "Itinerator"})
},

// Post New User 
create: (req, res, next) => {
    User.create({
        name: req.body.name,
        username: req.body.username,
        age: req.body.age,
        location: req.body.location,
        image: req.body.image,
        favoriteActivity: req.body.favoriteActivity
    }).then(users => {

    res.redirect(`/users/${users._id}`)
})
        .catch((error) => {
            console.log(error)
        })
},
    
//Edit user
edit: (req, res) => {
    User.findById(req.params.id).then(users => {
      res.render('users/edit', { users: users })
    })
        .catch((err) => {
            console.log(err)
        })
},


//Update user
update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
      res.redirect(`/users/${updatedUser._id}`)
    })
    .catch((err) => {
        console.log(err)
    })
  },




}
module.exports = userController