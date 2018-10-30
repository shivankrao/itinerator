const applicationController = {
    index: (req, res, next) => {
        res.render('index', { title: 'Itinerator' });
      
},
 
}

module.exports = applicationController