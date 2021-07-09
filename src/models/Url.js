const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  urlCode : String,
  fullUrl : String,
  shortUrl : String,
  date : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Url', URLSchema)