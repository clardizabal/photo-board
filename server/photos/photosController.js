var Q = require('q');
var Photo = require('./photosModel.js');
var fs = require('fs');

// Promisify a few mongoose methods with the `q` promise library
var findPhoto = Q.nbind(Photo.findOne, Photo);
var createPhoto = Q.nbind(Photo.create, Photo);
var findAllPhotos = Q.nbind(Photo.find, Photo);

module.exports = {
  allPhotos: function (req, res, next) {
    findAllPhotos({})
      .then(function (photos) {
        res.json(photos);
      })
      .fail(function (error) {
        next(error);
      });
  },

  newPhoto: function(req, res, next) {
    var photo = req.body.file;
    // console.log(typeof photo);
    console.log('Number of files to upload: ', photo.length);

    for (var i = 0; i < photo.length; i++) {
      createPhoto({img: photo[i]});      
    }
    res.json();
  }
};
