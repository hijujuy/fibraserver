const { body, validationResult } = require('express-validator')
const { nombreExists } = require('../helpers/usuario')

const signup = [
  body('nombre')
    .exists({checkFalsy: true})
      .withMessage('El campo nombre esta vacio.')
      .bail()
    .custom(nombreExists)
      .bail(),

  (req, res, next) => {
    const errors = validationResult(req)
    console.log(errors);    
    if (!errors.isEmpty()) {
      next(errors);
    }

    next()
  }
]

module.exports = {  
 signup,
}