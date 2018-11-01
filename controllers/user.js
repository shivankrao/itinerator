const express = require('express')
const router = express.Router()
const User = require('../models/users')


//get users
const userController = {
    index: (req, res) => {
      User.find().then((users) => {
        res.render('users/index', {title: "Itinerator",
          users: users
        })
        .catch((err) => {
            console.log(err)
        })

    })
},

// get new user page
new: (req, res) => {
    res.render('users/new', {title: "Itinerator"})
},

show: (req, res) => {
    User.findById(req.params.id).populate("activities").then((users) => {
        console.log(users)
      res.render('users/show', {title: "Itinerator",
        users: users
      })
    })
    // .catch((err) => {
    //     console.log(err)
    // })
  },

// Post New User 
create: (req, res, next) => {
    User.create(req.body).then(users => {
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

},


//Update user
update: (req, res) => {
    User.findByIdAndUpdate(req.params.usersId, req.body).then((updatedUser) => {
        updatedUser.save()
      res.redirect(`/users/${updatedUser._id}`)
    })
    .catch((err) => {
        console.log(err)
    })
  },

//Delete user
delete: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/users')
    })
  }


}
module.exports = userController