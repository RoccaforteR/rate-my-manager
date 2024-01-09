const router = require('express').Router();



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});

router.get('/new', (req, res) => {

    res.render('new');
});
module.exports = router;