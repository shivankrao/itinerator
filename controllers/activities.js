const express = require('express')
const router = express.Router()
const City = require('../models/Cities')
const Activity = require('../models/activities')
const User = require('../models/users')

const activityController = {
    new: (req, res) => { 
      User.findById(req.params.usersId).then(user =>{
        res.render('activities/new',
          {
            user: user
          }
        )
      })
    },

    show: (req, res) => {
        Activity.findById(req.params.activitiesId).then((activities) => {
          res.render('activities/show', {
            activities: activities,
            userId: req.params.id
          })
        })
      },
    

    create: (req, res) => {
        User.findById(req.params.usersId).populate('activities')
        .then(user =>{
          Activity.create(req.body).then(newActivity=> {
            user.activities.push(newActivity)
            user.save()
            res.redirect(`/users/${req.params.usersId}/activities/${newActivity._id}`)
          })
          })
      },

    edit: (req, res) => {
    Activity.findById(req.params.id).then(activities => {
      res.render('activities/edit', { activities: activities })
    })
  },

  update: (req, res) => {
    Activity.findByIdAndUpdate(req.params.id, req.body).then((updatedActivity) => {
      res.redirect(`/activities/${updatedActivity._id}`)
    })
  },

  delete: (req, res) => {
    Activity.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/activities/new')
    })
  }
}



    
module.exports = activityController