const express = require('express');
const router = express();
const { deshboard ,login} = require('../controllers/main');     
const authenticationmiddleware = require('../middleware/auth');

router.post('/login',login);

router.get('/dashboard',authenticationmiddleware,deshboard)

module.exports = router;
