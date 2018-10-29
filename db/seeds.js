const Cities = require('../models/Cities')

const newCity = [
	{
		title: "New York City",
		description: "It is rice that is fried",
		instructions: "rice fried",
		ingredients: "rice",
		img: " "
	}
]

Cities.create(newCity).then(cities => {
	console.log('Saved Cities', cities)
})