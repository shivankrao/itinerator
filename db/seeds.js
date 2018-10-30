const mongoose = require('./connection')
const City = require('../models/cities')
const Activity = require('../models/activities')
const User = require('../models/users')
const Restaurant = require('../models/restaurants')


//CITIES DUMMY DATA

const nyc = new City({

	
    name: "New York City",
	description: "",
    activities: [activitiesSchema],
    restaurants: [restaurantSchema],
	img: "/images/nyc.jpg",
	})

const atlanta = new City({

    name: "Atlanta",
	description: "",
    activities: [activitiesSchema],
    restaurants: [restaurantSchema],
	img: String,
    })
    
const chicago = new City({

        name: "Chicago",
        description: "",
        activities: [activitiesSchema],
        restaurants: [restaurantSchema],
        img: String,
        })

const losAngeles = new City({

        name: "Los Angeles",
        description: "",
        activities: [activitiesSchema],
        restaurants: [restaurantSchema],
        img: String,
            })

const paris = new City({

    name: "Paris",
	description: "",
    activities: [activitiesSchema],
    restaurants: [restaurantSchema],
	img: String,
    })
    
const tokyo = new City({

    name: "Tokyo",
	description: "",
    activities: [activitiesSchema],
    restaurants: [restaurantSchema],
	img: String,
    })
    
const madrid = new City({

    name: "Madrid",
	description: "",
    activities: [activitiesSchema],
    restaurants: [restaurantSchema],
	img: String,
    })

const nycActivities = new Activity({
    
})