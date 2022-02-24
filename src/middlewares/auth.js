const { header, body, validationResult } = require('express-validator')
const { emailExists, emailNoExists } = require('../helpers/usuario')
const { verificarToken } = require('../helpers/auth')

const signup = [
  body('email')
    .exists({checkFalsy: true})
      .withMessage('El campo email esta vacio.')
      .bail()
    .custom(emailNoExists)
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
  body('email')
    .exists({checkFalsy: true})
      .withMessage('El campo email esta vacio.')
      .bail()
    .custom(emailExists)
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

const checkToken = [
  header('access-token')
    .exists({checkFalsy: true})
      .withMessage('El usuario no esta autenticado.')
      .bail()
    .custom(verificarToken)
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
 signup,
 signin,
 checkToken,
}