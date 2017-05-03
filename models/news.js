var mongoose = require('mongoose');
mongoose.Promise = require('es6-promise');

var newsSchema = new mongoose.Schema ({
    title: String,
    center: String,
    date: String,
    content: String
});

//compile a 'data' model using the DataSchema as the structure
module.exports = mongoose.model('newsData', newsSchema);