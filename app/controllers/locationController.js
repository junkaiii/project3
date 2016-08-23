var request = require('request');
var Location = require('mongoose').model('Location');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA8Ym4Z22s2mhNISM18ef_8kldnDA_gXtM'
});

module.exports = {
  //get all locations
  index: function(req, res, next) {
    Location.find({}, function(err, locations) {
      if (err) return next(err);
      res.json(locations);
    });
  },
  //create new location
  create: function(req, res, next) {
    var new_location = new Location(req.body);

    new_location.save(function(err) {
      //set error messages
      if (err) {
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
  search: function(req, res, next) {
    //check if query is on specific attribute in db
    if (req.query.attrQ) {
      delete req.query.attrQ;
      Location.find(req.query).exec(function(err, location) {
        if (err) return next(err);
        res.send(location);
      });
    } else {
      var lat = req.query.lat || 1.2790995;
      var lon = req.query.lon || 103.8414652;
      var distance = req.query.dist || 10;
      Location.find().circleDistAway(lat, lon, distance).exec(function(err, locations) {
        if (err) return res.send(err);
        res.send(locations);
      });
    }
  },
  //searches which require google api
  advSearch: function(req, res, next) {
    //get request parameters
    var origLat = req.query.lat || 1.2790995;
    var origLong = req.query.lon || 103.8414652;
    var travelMode = req.query.mode || 'walking';
    var circleApprox,dist, time;

    //checks query type
    if(req.query.dist){
      circleApprox = req.query.dist * 2;
      actualDist = req.query.dist;
    }else if(req.query.time){
      //assumption that avg speed is 1km per 10 mins

    }else{
      //assumes 10km by default
      dist = 10;
    }

    //set origin parameters
    parameters = {
      origins: [
        [origLat, origLong]
      ],
      mode: travelMode
    };

    //check if it's a time query
    if(!req.query.time){
      //get approx radius to call own cirle query
      circleApprox = req.query.dist * 2 || 20;
      actualDist = req.query.dist || 10;

      //initial array based on circular radius
      Location.find().circleDistAway(origLat, origLong, circleApprox).exec(function(err, locations, done) {
        if (err) return res.send(err);
        var arr = [];
        var filteredArr = [];

        //add locations into destinations parameter for api call
        for (var i = 0; i < locations.length; i++) {
          var long = locations[i].latLong.coordinates[0].toString();
          var lat = locations[i].latLong.coordinates[1].toString();
          arr.push([lat, long]);
        }
        parameters.destinations = arr;

        //call google api
        googleMapsClient.distanceMatrix(
          parameters,
          function(err, response) {
            if (err) return res.json(err);
            //get the distance away in km
            for (var j = 0; j < response.json.rows[0].elements.length; j++) {
              var distAway = parseFloat(response.json.rows[0].elements[j].distance.text.split(" ")[0]);
              if (distAway <= actualDist ) {
                locations[j].distance = distAway;
                filteredArr.push(locations[j]);
                // filteredArr.push({
                //   "Point": locations[j]
                // }, {
                //   "Distance": distAway
                // });
              }
            }
            res.json(filteredArr);
          });
      });
    }else{
      circleApprox = req.query.time / 10 * 2;
      time = req.query.time;
      //initial array based on circular radius
      Location.find().circleDistAway(origLat, origLong, circleApprox).exec(function(err, locations, done) {
        if (err) return res.send(err);
        var arr = [];
        var filteredArr = [];

        //add locations into destinations parameter for api call
        for (var i = 0; i < locations.length; i++) {
          var long = locations[i].latLong.coordinates[0].toString();
          var lat = locations[i].latLong.coordinates[1].toString();
          arr.push([lat, long]);
        }
        parameters.destinations = arr;

        //call google api
        googleMapsClient.distanceMatrix(
          parameters,
          function(err, response) {
            if (err) return res.json(err);
            var retTime;
            var locList = response.json.rows[0].elements;

            //get the duration for checking against request params
            for (var j = 0; j < locList.length; j++) {
              //check if response has time in hours or just minutes
              var locTime = locList[j].duration.text;
              var hTextLoc = locTime.indexOf('hours');
              var mTextLoc = locTime.indexOf('mins');

              //convert to minutes to compare with query
              if(hTextLoc === -1){
                retTime = parseFloat(locTime.split(" ")[0]);
              }else{
                retTime = parseFloat(locTime.split(" ")[0]) * 60 + parseFloat(locTime.split(" ")[2]);
              }
              //add to final array only if satisfies request
              if(retTime <= time){
                locations[j].time = retTime;
                filteredArr.push(locations[j]);
              }

            }
            res.json(filteredArr);
          });
      });
    }
  }
};
