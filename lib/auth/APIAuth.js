const apiKey = process.env.API_KEY;

exports.checkKey = function(req) {
    if(req.body != null) {
        if(req.body.key == apiKey){
            return true;
        }
    }
    return false;
}