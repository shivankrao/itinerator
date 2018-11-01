const mongoose = require('./connection')
const City = require('../models/cities')
const Activity = require('../models/activities')
const User = require('../models/users')



//ACTIVITIES DUMMY DATA
//NYC ACTIVITIES
const nycAct1 = new Activity({

    name: "The Cloisters",
    description: "This annex of the famous Metropolitan Museum of Art is hidden away in the gorgeous Fort Tryon Park. It houses an impressive collection of items dating back to medieval European times including artwork, artifacts, and illuminated manuscripts.",
    location: "99 Margaret Corbin Dr, New York, NY 10040, USA",
    price: "Free for members and children, $12 for students, $17 for seniors, $25 for non-NY residing adults"

})

const nycAct2 = new Activity({

    name: "Smorgasburg",
    description: "Smorgasburg is the largest weekly open-air food market in America where over 100 vendors set up stalls to offer visitors a diverse selection of food from all around the world.",
    location: "90 Kent Ave, Brooklyn, NY 11211, USA",
    price: "Varies by stall, $11-$30"


})

const nycAct3 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

//ATLANTA ACTIVITIES

const atlAct1 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const atlAct2 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const atlAct3 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

//CHICAGO ACTIVITIES

const chiAct1 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const chiAct2 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const chiAct3 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

//LOS ANGELES ACTIVITIES

const losAngelesAct1 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const losAngelesAct2 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const losAngelesAct3 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

//PARIS ACTIVITIES

const parisAct1 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const parisAct2 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const parisAct3 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

//TOKYO ACTIVITIES

const tokyoAct1 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const tokyoAct2 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const tokyoAct3 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

//MADRID ACTIVITIES

const madridAct1 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const madridAct2 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

const madridAct3 = new Activity({

    name: "Chelsea Market",
    description: "Chelsea Market is a food hall, shopping mall, office building and television production facility located in the Chelsea neighborhood.",
    location: "75 9th Ave, New York, NY 10011",
    price: "Varies by store"

})

//CITIES DUMMY DATA

const nyc = new City({

	
    name: "New York City",
	description: "",
    activities: [nycAct1, nycAct2, nycAct3],
	img: "/images/nyc.jpg"
	})

const atlanta = new City({

    name: "Atlanta",
	description: "",
    activities: [atlAct1, atlAct2, atlAct3],
	img: "/images/atlanta.jpg"
    })
    
const chicago = new City({

        name: "Chicago",
        description: "",
        activities: [chiAct1, chiAct2, chiAct3],
        img: "/images/chicago.jpg"
        })

const losAngeles = new City({

        name: "Los Angeles",
        description: "",
        activities: [losAngelesAct1, losAngelesAct2, losAngelesAct3],
        img: "/images/losangeles.jpg"
            })

const paris = new City({

    name: "Paris",
	description: "",
    activities: [parisAct1, parisAct2, parisAct3],
	img: "/images/paris.jpg"
    })
    
const tokyo = new City({

    name: "Tokyo",
	description: "",
    activities: [tokyoAct1, tokyoAct2, tokyoAct3],
	img: "/images/tokyo.jpg"
    })
    
const madrid = new City({

    name: "Madrid",
	description: "",
    activities: [madridAct1, madridAct2, madridAct3],
	img: "/images/madrid.jpg"
    })

const john = new User({

    name: "John",
    username: "johndoe",
    location: "Madrid",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/John_Krasinski_and_Josh_Wood_%28cropped%29.jpg/220px-John_Krasinski_and_Josh_Wood_%28cropped%29.jpg",
    activities: [madridAct3]
    
})

User.remove({})
    .then(() => User.deleteMany({}))
    .then(() => User.insertMany([john]))
City.remove({})
   .then(() => Activity.deleteMany({}))
   .then(() => Activity.insertMany([nycAct1, nycAct2, nycAct3, atlAct1, atlAct2, atlAct3, chiAct1, chiAct2, chiAct3, losAngelesAct1, losAngelesAct2, losAngelesAct3, parisAct1, parisAct2, parisAct3, tokyoAct1, tokyoAct2, tokyoAct3, madridAct1, madridAct2, madridAct3]))
   .then(() => nyc.save())
   .then(() => atlanta.save())
   .then(() => chicago.save())
   .then(() => losAngeles.save())
   .then(() => paris.save())
   .then(() => tokyo.save())
   .then(() => madrid.save())
   .then(() => console.log("Database seeded success"))
   .then(() => mongoose.connection.close())