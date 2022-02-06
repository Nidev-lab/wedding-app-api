var express = require('express');
var router = express.Router();
const controller = require('../controllers/register');

router.post('/register', controller.register);

module.exports = router;
