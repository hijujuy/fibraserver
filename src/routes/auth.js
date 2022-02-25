const express = require('express');

const controller = require('../controllers/auth');

const validator = require('../middlewares/auth');

const router = express.Router();

  router.post('/signup',
    validator.signup,
    controller.signup
  );

  router.post('/signin',
    validator.signin,
    controller.signin
  );

module.exports = router;