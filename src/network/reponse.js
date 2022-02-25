const success = function(req, res, message, status) {        
  res.status(status || 200).json({
    error: '',
    body: message
  });
}

const middleErrors = function(errors, req, res, next) {        
  console.log(errors.errors);
  res.status(400).json({
    error: "Ocurrio un error en el sistema.",
    body: ''
  });
}

const errors = function(req, res, message, status, descripcion) {
  console.log(descripcion);
  res.status(status).json({
    error: message,
    body:''
  });
}

module.exports = {
    success, errors, middleErrors
}