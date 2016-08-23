var Location = require('mongoose').model('Location');

module.exports = {
  //get all locations
  index: function(req, res, next) {
    Location.find({}, function(err, locations){
      if(err) return next(err);
      res.json(locations);
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
      res.send("Return locations from current locations");
    }
  }
};
