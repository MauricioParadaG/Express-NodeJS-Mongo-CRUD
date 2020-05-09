const usersController = {};

const passport = require('passport');

const User = require('../models/User');

// New user registration
usersController.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersController.signup = async (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password} = req.body;
    if(password != confirm_password) {
        errors.push({text: 'The Password do not match'});
        req.flash('error_msg', 'Wrong password');
    }
    if(password.length < 5) {
        errors.push({text: 'The Password must be at least 5 characters'});
    }
    if(errors.length > 0){
        res.render('users/signup', {errors, name, email});
    } else{
        // Checking if email is repeated
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'The email already exist');
            res.redirect('/users/signup');
        } else{
        // saving to database    
        const newUser = new User({name: name, email: email, password: password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Registration was Sucessfull');
        res.redirect('/users/signin');
        }
    }
};

// Sign in or Loging and form
usersController.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersController.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});


// Logout
usersController.logout = (req, res) => {
    
    res.send('Logout');
};


module.exports = usersController; 