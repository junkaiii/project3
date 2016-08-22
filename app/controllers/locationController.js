var request = require('request');
var Location = require('mongoose').model('Location');
var googleMapsClient = require('@google/maps').createClient({
key: 'AIzaSyA8Ym4Z22s2mhNISM18ef_8kldnDA_gXtM'
});

module.exports = {
  //get all locations
  index: function(req, res, next) {
    Location.find({}, function(err, locations){
      if(err) return next(err);
      res.json(locations);
    });
  },
  //create new location
  create: function(req, res, next) {
    var new_location = new Location(req.body);

    new_location.save(function(err){
      //set error messages
      if(err) {
        var err_message = {
          "message": err.errors,
          "status_code": 400
        };
        return res.status(400).send(err);
      }
      res.json(new_location);
    });
  },
  //search based on query params
  search: function(req, res, next){
    //check if query is on specific attribute in db
    if(req.query.attrQ){
      delete req.query.attrQ;
      Location.find(req.query).exec(function(err, location){
          if(err) return next(err);
          res.send(location);
      });
    }else{
      var lat = req.query.lat || 0;
      var lon = req.query.lon || 0;
      var distance = req.query.dist || 10;
      Location.find().circleDistAway(lat, lon, distance).exec(function(err, locations){
        if(err) return res.send(err);
        res.send(locations);
      });
    }
  },
  //searches which require google api
  advSearch: function(req, res, next){
    //get request parameters
    var origLat = req.query.lat || 1.3521;
    var origLong = req.query.lon || 103.8198;
    var dist = req.query.dist * 5 || 10;
    //set origin parameters
    parameters = {
      origins: [[origLat,origLong]],
      mode: "walking"
    };

    //initial array based on circular radius
    Location.find().circleDistAway(origLat, origLong, dist).exec(function(err, locations, done){
      if(err) return res.send(err);
      var arr = [];

      //add locations into destinations parameter for api call
      for(var i = 0; i < locations.length; i++){
        var long = locations[i].latLong.coordinates[0].toString();
        var lat = locations[i].latLong.coordinates[1].toString();
        arr.push([lat, long]);
      }

      parameters.destinations = arr;

      //call google api
      googleMapsClient.distanceMatrix(
        parameters, function(err, response){
          if (err) return res.json(err);
          // []
          // res.json(response.json.rows[0].elements[0]);
          res.json(response.json);
        });
    });
  }
};
