var mongoose = require('mongoose');

//create schema for locations
var locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  latLong: {
    type: {
      type: String,
      default: 'Point'
    },
    //note, coordiates are stored in long, lat format
    coordinates: [ Number ]
  }
});

locationSchema.index({latLong: '2dsphere'});

locationSchema.query = {
  circleDistAway: function(lat, long, dist){
    //get all points within circular radius
  //  return this.where('latLong').near({ 'center': [long, lat], 'maxDistance': dist * 2.74268 / 111.12, 'spherical': true, 'limit': 5 });
  return this.where('latLong').near({ 'center': [long, lat], 'maxDistance': dist /6371, 'spherical': true, 'limit': 5 });
  }
};

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;
