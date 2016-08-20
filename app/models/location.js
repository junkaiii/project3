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
  postalCode: {
    type: String,
    validate: {
      validator: function(po) {
        return /\d{6}/.test(po);
      },
      message: '{VALUE} is not a valid postal code'
    }
  },
  location: {
    type: String
  },
  latLong: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [ Number ]
  }
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;
