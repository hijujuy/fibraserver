const express = require('express');

const validatorAuth = require('../middlewares/auth');

const validatorUser = require('../middlewares/usuario')

const controller = require('../controllers/usuario');

const router = express.Router();

router.get('/', controller.readAll);

router.post('/',
  validatorAuth.checkToken,
  validatorUser.checkSupervisor,
  controller.create
);

router.post('/supervisor',
  validatorAuth.checkToken,
  validatorUser.checkTitular,
  controller.create
);

router.post('/titular',
  validatorAuth.checkToken,
  validatorUser.checkAdministrador,
  controller.create
);

// router.get('/:id', controller.readById)

// router.put('/:id', controller.update)

// router.delete('/:id', controller.desable)

// router.post('/:id', controller.enable)

module.exports = router;