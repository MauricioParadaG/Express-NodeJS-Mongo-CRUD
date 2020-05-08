const usersController = {};

const User = require('../models/User');

// New user registration
usersController.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersController.signup = (req, res) => {
    res.send('signup');
};

// Sign in or Loging and form
usersController.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersController.signin = (req, res) => {
    res.send('sign in');
};

// Logout
usersController.logout = (req, res) => {
    res.send('Logout');
};


module.exports = usersController; 