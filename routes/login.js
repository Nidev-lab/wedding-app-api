var express = require('express');
var router = express.Router();
const controller = require('../controllers/login');

router.post('/login', controller.login);

module.exports = router;
