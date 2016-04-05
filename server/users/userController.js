var Q = require('q');
var jwt = require('jwt-simple');
var User = require('./userModel.js');

module.exports = {
  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // check to see if user already exists
    findUser({username: username})
      .then(function (user) {
        if (user) {
          next(new Error('User already exist!'));
        } else {
          // make a new user if not one
          return createUser({
            username: username,
            password: password
          });
        }
      })
      .then(function (user) {
        // create token to send back for auth
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      })
      .fail(function (error) {
        next(error);
      });
  }
};