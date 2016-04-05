var mongoose = require('mongoose');
var crypto = require('crypto');

var PhotoSchema = new mongoose.Schema({
  img: {data: Buffer, contentType: String}
});

module.exports = mongoose.model('Photo', PhotoSchema);