var mongoose = require('mongoose');
mongoose.Promise = require('es6-promise');
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new mongoose.Schema ({
    username: String,
    email: String,
    center: String,
    password: String
});
Account.plugin(passportLocalMongoose); //salting and hashing the password
//compile a 'accounts' model using the Account as the structure
module.exports = mongoose.model('accounts', Account);//model name is accounts