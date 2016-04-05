var Q = require('q');
var Photo = require('./photosModel.js');
var fs = require('fs');

// Promisify a few mongoose methods with the `q` promise library
var findPhoto = Q.nbind(Photo.findOne, Photo);
var createPhoto = Q.nbind(Photo.create, Photo);
var findAllPhoto = Q.nbind(Photo.find, Photo);

module.exports = {
  newPhoto: function(req, res, next) {
    var photo = new Photo;
    var imgPath = req.body.file;
    // console.log('IMAGE PATH: ', imgPath);
    console.log('NEW PHOTO!!!');
    return;
    // photo.img.data = fs.readFileSync(imgPath);
  }
};
