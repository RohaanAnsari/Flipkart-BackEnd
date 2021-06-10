const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth');
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../validators/auth');

router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);

// router.post('/profile', (req, res) => {
//   res.status(200).json({ user: 'profile' })
// });

module.exports = router;