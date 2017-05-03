var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');
var flash = require('connect-flash');

var users = require('./routes/users');
var blogs = require('./routes/blogs');
var privilege = require('./models/privilege');
// apply the routes to our application



var datas = require('./routes/datas');


//register middleware
app.use(bodyParser.json());
//extract data from the <form> and add them to the body property
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(expressSession({
    secret: process.env.SESSION_SECRET || 'secret_key',
    resave: false,
    saveUninitialized: false
}));

//passport has to be behind the parser
app.use(passport.initialize());
app.use(passport.session());
//set static folder
app.use(express.static(__dirname + '/utility'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//connect flash
app.use(flash());
//global variable
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.username = req.session.username || null; //is it a user
    res.locals.alertMessage = req.session.alertMessage || null;
    //res.locals.center = req.body.center || null;
    next();
});

//connect db
mongoose.connect('mongodb://twang13:wtwcs132@ds147520.mlab.com:47520/login');
app.use('/accounts', users);
app.use('/', blogs);

//direct to the home page
app.get('/', function(request, response) {

    response.render('index');
});

app.get('/about', function(request, response) {

    response.render('about');
});

app.get('/resources', function(request, response) {
    response.render('resources');
});


//the following requires login
// app.use(privilege.isLoggedIn);

app.get('/database', function(request, response) {
    response.render('db');
});


app.get('/database/update', function(request, response) {
    response.render('db_update');
});

app.get('/database/view', function (request, response) {
    response.render('db_view');
});

app.get('/database/download', function (request, response) {
    response.render('db_download');
});

app.use('/', users);
app.use('/', blogs);
app.use('/', datas);

app.use('/', users);
app.use('/', blogs);


//set port
var port = process.env.PORT || 8080;
app.listen(8080, function () {
    console.log("listen to port " + port);
});