const { Router } = require('express');
const router = Router();

const { renderSignUpForm, signup, renderSignInForm, signin, logout } = require('../controllers/users.controller');

// New user registration
router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signup );

// Sign in or Loging and form
router.get('/users/signin', renderSignInForm);

router.post('/users/signin', signin);

// Logout
router.get('/users/logout', logout);


module.exports = router;