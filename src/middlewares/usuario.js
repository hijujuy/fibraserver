const { body, validationResult } = require('express-validator')
const { esAdministrador } = require('../helpers/usuario')

const checkAdministrador = [
  body('id')
    .exists({checkFalsy: true})
      .withMessage('El campo id esta vacio.')
      .bail()
    .custom(esAdministrador)
      .bail(),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      next(errors);
    }

    next()
  }
]

const checkTitular = [
  body('id')
    .exists({checkFalsy: true})
      .withMessage('El campo id esta vacio.')
      .bail()
    .custom(esTitular)
      .bail(),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      next(errors);
    }

    next()
  }
]

const checkSupervisor = [
  body('id')
    .exists({checkFalsy: true})
      .withMessage('El campo id esta vacio.')
      .bail()
    .custom(esSupervisor)
      .bail(),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      next(errors);
    }

    next()
  }
]

module.exports = {  
  checkAdministrador,
  checkTitular,
  checkSupervisor,
}