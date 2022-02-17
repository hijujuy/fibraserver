const express = require('express')

const controller = require('../controllers/usuario')

const router = express.Router()

router.get('/', controller.readAll)

// router.get('/:id', controller.readById)

router.post('/', controller.create)

// router.put('/:id', controller.update)

// router.delete('/:id', controller.desable)

// router.post('/:id', controller.enable)

module.exports = router;