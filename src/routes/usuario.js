const express = require('express')

const controller = require('../controllers/usuario')

const router = express.Router()

router.get('/', controller.readAll)

router.post('/', controller.createUsuario)

router.post('/supervisor', controller.createSupervisor)

router.post('/titular', controller.createTitular)

// router.get('/:id', controller.readById)

// router.put('/:id', controller.update)

// router.delete('/:id', controller.desable)

// router.post('/:id', controller.enable)

module.exports = router;