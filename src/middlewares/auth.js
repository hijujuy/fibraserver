const { body, validationResult } = require('express-validator')
const { nombreExists, nombreNoExists } = require('../helpers/usuario')

const signup = [
  body('nombre')
    .exists({checkFalsy: true})
      .withMessage('El campo nombre esta vacio.')
      .bail()
    .custom(nombreNoExists)
      .bail(),
  body('clave')
    .exists({checkFalsy: true})
      .withMessage('El campo clave esta vacio.')
      .bail(),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      next(errors);
    }

    next()
  }
]

const signin = [
  body('nombre')
    .exists({checkFalsy: true})
      .withMessage('El campo nombre esta vacio.')
      .bail()
    .custom(nombreExists)
      .bail(),
  body('clave')
    .exists({checkFalsy: true})
      .withMessage('El campo clave esta vacio.')
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
 signup,signin
}