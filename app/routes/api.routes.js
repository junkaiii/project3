//api routes
var express = require('express');
var app = express();
var apiRoutes = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Location = require('../models/location');
var jwt_secret = 'ilovejiaksimi';

module.exports = function(apiRoutes) {
//set secret for JWT

 //route to authenticate a User
apiRoutes.post('/authenticate', function(req, res) {

  //find the users
  User.findOne({
    'local.email': req.body.email
  }, function(err, user) {
    if(err) throw err;

    if(!user) {
      res.json({ success: false,
                  message: 'authentication failed. User not found'});
    }
    else if (user) {

      //check if match
      if (!user.validPassword(req.body.password)) {
        res.json({ success: false, message: 'authentication fail wrong password'});

      } else {
        //if user is found and pwd is right
        //create token
        var token = jwt.sign(user, jwt_secret);

        //return information including token as json
        res.json({
          success: true,
          message: 'enjoy your token',
          token: token
        });

    }
    }
  });
});

 //route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  var token = req.body.token || req.query.token || req.headers['x-access-token'];


//decode token
if (token) {

  //verifies secret
  jwt.verify(token, jwt_secret, function(err, decoded) {
    if (err) return res.json({success: false, message: 'failed to auth token'});
  else {

     req.decoded = decoded;
     next();
  }

  });
} else {

  //if no token return Error
  return res.status(403).send({
    success: false,
    message: 'No token is provided.'
  });
}

});

//route welcome message when verified
apiRoutes.get('/', function(req, res) {
  res.json({message: 'Welcome to the Jiak Simi Api'});
});

//create new location
apiRoutes.post('/locations', function(req, res, next) {
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
});






};
