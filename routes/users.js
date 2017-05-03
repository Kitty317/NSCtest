var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportlocal = require('passport-local');
var flash = require('connect-flash');

//passport config
var Account = require('../models/account');
passport.use(new passportlocal.Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
router.use(flash());

router.get('/login', function (request, response) {
    request.session.alertMessage = null;
    console.log(response.locals.error);
    response.render('login', {status:'login'});
});

router.post('/register', function (request,  response) {
    console.log(request.body);
    var userName = request.body.username;
    var email = request.body.email;
    var center = request.body.center;
    var password = request.body.password;
    var verify = request.body.confirmPassword;

    var errors = {
        "userName": userName,
        "email":email,
        "duplicateName": ''
    };
    if (validateSignup(userName, email, password, verify, errors)) {
        Account.register(new Account({username : userName, email:email, center:center}), password, function(error, account) {
            if (error) {
                //same username
                errors.duplicateName = error.message;

                response.render('login', {status: 'register', register_message: errors})
            }
            else {
                passport.authenticate('local')(request, response, function () {
                    request.session.username = request.body.username;
                    request.session.center = request.body.center;
                    response.locals.username = request.body.username;
                    response.render('index');
                })
            }
        });
    } else {

        console.log("user did not validate");
        return response.render('login', {status: 'register', register_message: errors})
    }

});

router.post('/login', passport.authenticate('local', { failureRedirect:'/accounts/login', failureFlash: true}),
    function(request, response, err) {
        Account.find({username: request.body.username}, 'center',function(err, result) {
            //callback, everything is inside!!
            request.session.center = result[0].center;
            request.session.username = request.body.username;
            response.locals.username = request.body.username;
            response.render('index');


        });
});

router.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            req.logout();
            res.redirect('/');
        }
    });
});


function validateSignup(username, email, password,verify, errors) {
    var USER_RE = /^.{1,20}$/;
    var EMAIL_RE = /^[\S]+@[\S]+\.[\S]+$/;
    var PASS_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    errors.userNameError = "";
    errors.passwordError = "";
    errors.verifyError = "";
    errors.emailError = "";

    if (!USER_RE.test(username)) {
        errors.userNameError = "Invalid user name.";
        return false;
    }
    if (!PASS_RE.test(password)) {
        errors.passwordError = "Password must be at least characters" +
            " including numbers, lowercase and uppercase letters.";
        return false;
    }
    if (password !== verify) {
        errors.verifyError = "Password must match";
        return false;
    }
    if (email !== "") {
        if (!EMAIL_RE.test(email)) {
            errors.emailError = "Invalid email address";
            return false;
        }
    }
    return true;
}


module.exports = router;
