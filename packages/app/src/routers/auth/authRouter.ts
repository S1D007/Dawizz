const express = require('express');
const router = express.Router();

import signUpNewUser from '../../controller/auth/signUp';
import signInUser from '../../controller/auth/signIn';

router.post('/signup', signUpNewUser);
router.post('/signin', signInUser);

module.exports = router;
