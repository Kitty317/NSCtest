var express = require('express');
var router = express.Router();

var News = require('../models/news');
var privilege = require('../models/privilege');

router.get('/news', function(request, response) {

    response.render('news');
});

router.get('/news/add', function(request, response) {

    //display all news
    News.find().sort({date: -1}).exec(function(err, newsData) {
        if (err) {
            console.error(err);
        } else {
        response.json(newsData);
        }
    });
});

router.get('/forum', function(request, response) {

    response.render('forum');
});

//add news middleware here!
router.get('/update',function(request, response) {

    response.render('addNews');
});

router.post('/update',function(request, response) {
    console.log(request.session);
    var name = request.body.title;
    var content = request.body.content;
    News.create({
        title: name,
        center: request.session.center,
        date: new Date(),
        content: content
    }, function(err, newsData) {
        if (err) {
            response.send("There was a problem adding the information to the database.");
        } else {
            console.log('POST creating new News: ' + newsData);
            response.render('news');
        }
    })
} );

module.exports = router;