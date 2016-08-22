var request = require('request');
var Location = require('mongoose').model('Location');

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
      var distance = req.query.dist || 0;
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
    var filteredArr = [];

    //default assume distQ
    if(!req.query.timeQ){
      var distance = req.query.dist || 50;

      parameters = {
        origins: origLat + "," + origLong,
        mode: "walking",
        key: "AIzaSyA8Ym4Z22s2mhNISM18ef_8kldnDA_gXtM"
      };

      //get approx list of locations based on circular dis query
      Location.find().circleDistAway(origLat, origLong, distance).exec(function(err, locations){
        if(err) return res.send(err);

        //filter by checking actual distance based on travel mode of choice
        for(var i = 0; i < locations.length; i++){
          var destLatLong = locations[i].latLong.coordinates[1] + "," + locations[i].latLong.coordinates[0];
          parameters.destinations = destLatLong;

          //check actual travelling distance to each destination
          console.log(callAPI(parameters));
          // filteredArr.push(callAPI(parameters));
        }
        res.send(filteredArr);
      });
    }
    //pass in params to google api
    function callAPI(params){
      // request
      //   .get('https://maps.googleapis.com/maps/api/distancematrix/json', { qs: params }, function(err, response, body){
      //       if(err) return err;
      //       var areas = JSON.parse(body);
      //       // console.log(areas.rows[0].elements[0].distance.text);
      //       return areas.rows[0].elements[0].distance.text;
      //   });
    }
    // parameters = {
    //   origins: "1.2930,103.8520",
    //   destinations: "1.2815,103.8391",
    //   mode: "walking",
    //   key: "AIzaSyA8Ym4Z22s2mhNISM18ef_8kldnDA_gXtM"
    // };
    // //send request to google api
    // request
    //   .get('https://maps.googleapis.com/maps/api/distancematrix/json?', { qs: parameters }, function(err, response, body){
    //     if(err) return res.send(err);
    //     var areas = JSON.parse(body);
    //     res.send(areas);
    //   });
  }
};
