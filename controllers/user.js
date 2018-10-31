const express = require('express')
const router = express.Router()
const user = require('../models/users')


//GET new user page

const userController = {

 index: (req, res) => {
    user.find({})
        .then((users) => {
            console.log("USERS", users)
            res.render('users/index', {
                users
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

}

module.exports = userController