var Q = require('q');
var Photo = require('./photosModel.js');
var fs = require('fs');

// Promisify a few mongoose methods with the `q` promise library
var findPhoto = Q.nbind(Photo.findOne, Photo);
var createPhoto = Q.nbind(Photo.create, Photo);
var findAllPhoto = Q.nbind(Photo.find, Photo);

module.exports = {
  newPhoto: function(req, res, next) {
    var photo = req.body.file;
    console.log(typeof photo);
    res.json(createPhoto({img: photo}));
    // console.log('REQUEST: ', photo);
  }
};
