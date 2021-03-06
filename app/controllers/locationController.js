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
  show: function(req, res, next) {
     var location = Location.findOne({"_id":req.params.id}, function(err, location){
       if(err) return next(err);
       res.json(location);
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

    //hours mins to mins converter
    function hToMinConverter(timeString){

      var hTextLoc = timeString.indexOf('hour');
      var mTextLoc = timeString.indexOf('minutes');

      //check to see if time has both hours and minutes
      if(hTextLoc === -1){
        return parseFloat(timeString.split(" ")[0]);
      }else{
        return parseFloat(timeString.split(" ")[0]) * 60 + parseFloat(timeString.split(" ")[2]);
      }

    }

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
            var locList = response.json.rows[0].elements;

            //get the distance away in km
            for (var j = 0; j < locList.length; j++) {

              var distAway = parseFloat(locList[j].distance.text.split(" ")[0]);

              var locTime = locList[j].duration.text;

              if (distAway <= actualDist ) {
                locations[j].distance = distAway;
                filteredArr.push(locations[j]);
                locations[j].time = hToMinConverter(locTime);
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
              var locDist = locList[j].distance.text.split(" ")[0];
              var locTime = locList[j].duration.text;

              retTime = hToMinConverter(locTime);

              if(retTime <= time){
                locations[j].distance = locDist;
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
