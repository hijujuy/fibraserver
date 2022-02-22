const express = require('express');

const middleAuth = require('../middlewares/auth');

const middleUser = require('../middlewares/usuario')

const controller = require('../controllers/usuario');

const router = express.Router();

router.get('/', controller.readAll);

router.post('/titular',
  middleAuth.checkToken,
  middleUser.checkAdministrador,
  controller.createTitular
);

router.post('/', controller.createUsuario);

router.post('/supervisor', controller.createSupervisor);

// router.get('/:id', controller.readById)

// router.put('/:id', controller.update)

// router.delete('/:id', controller.desable)

// router.post('/:id', controller.enable)

module.exports = router;