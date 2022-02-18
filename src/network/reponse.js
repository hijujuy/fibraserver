const success = function(req, res, message, status) {        
    res.status(status || 200).json({
        error: '',
        body: message
    });
}

const error = function(errors, req, res, next) {    
    
    console.log(errors.errors);

    res.status(400).json({
        error: "Ocurrio un error en el sistema.",
        body: ''
    })
}

module.exports = {
    success, error
}