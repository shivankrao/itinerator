const applicationController = {
    index: (req, res, next) => {
        res.render('cities/index', { title: 'Itinerator' });
      
},

    new: (req, res) => {
    res.render('cities/new')
},

}

module.exports = applicationController