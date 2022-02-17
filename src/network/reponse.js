const success = function(req, res, message, status) {        
    res.status(status || 200).json({
        error: '',
        body: message
    });
}

const error = function(req, res, message, details = null) {    
    if (res.status === 500) {
        console.log(`[response error] ${details}`);
    }
    res.status(400).json({
        error: message,
        body: ''
    })
}

module.exports = {
    success, error
}