const Cities = require('../models/cities')

const newCity = [
	{
		title: "New York City",
		description: "",
		instructions: "rice fried",
		ingredients: "rice",
		img: " "
	}
]

Cities.create(newCity).then(cities => {
	console.log('Saved Cities', cities)
})