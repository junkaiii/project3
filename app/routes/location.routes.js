module.exports = function(app) {
  var locationController = require('../controllers/locationController');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  //set routes
  app.route('/locations')
    .get(locationController.index);
    // .post(locationController.create);

  app.route('/locations/:id')
    .get(locationController.show)
    .put(locationController.update)
    .delete(locationController.delete);
  //set routes
  app.route('/locations/search')
    .get(locationController.search);

    //set routes
  app.route('/locations/advSearch')
    .get(locationController.advSearch);
};
