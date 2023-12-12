const express = require('express');
const router = express.Router();

import signUpNewUser from '../../controller/auth/signUp';
import signInUser from '../../controller/auth/signIn';
import signOutUser from '../../controller/auth/signOut';

console.log(typeof signUpNewUser, typeof signInUser, typeof signOutUser);

router.post('/signup', signUpNewUser);
router.post('/signin', signInUser);
router.get('/signout', signOutUser);

module.exports = router;
