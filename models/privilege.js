function isLoggedIn(req, res, next) {
    if (req.session.username) {
        next();
    }
    else {
        console.log("redirecting to login");
        req.session.alertMessage = "Please login first";
        return res.redirect("/accounts/login")
    }
}
exports.isLoggedIn = isLoggedIn;