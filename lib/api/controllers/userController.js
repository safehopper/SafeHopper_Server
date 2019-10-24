var AppUserPool = require('../../auth/AppUserPool');
var CognitoErrors = require('../../auth/CognitoErrors')
var APIAuth = require('../../auth/APIAuth');

var response = {
    error: null,
    content: null,
}

exports.getUserInfo = function(req, res) {
    res.status(200).send('NOT IMPLEMENTED: Get User Info');
};

exports.createUser = function(req, res) {
    console.log(req.body);
    if(req.body != null && APIAuth.checkKey(req)) {
        AppUserPool.registerUser(req.body).then(user => {
            // User was successfully created. Send the user object.
            response.error = false;
            response.content = {
                message: "User successfully created",
            }
            res.status(200).send(user);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = CognitoErrors.cognitoError(err);
            res.status(response.content.statusCode).send(response);
        })
    } else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    }
};

exports.loginUser = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)) {
        AppUserPool.loginUser(req.body).then(user => {
            console.log("User " + user.idToken.payload.email + " has been logged in.");
            res.status(200).send(user);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = CognitoErrors.cognitoError(err);
            res.status(response.content.statusCode).send(response);
        })
    } else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    }
};

exports.confirmUser = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req) == true) {
        AppUserPool.confirmUser(req.body).then(confirmationResult => {
            response.error = false;
            response.content = confirmationResult;
            res.send(response);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = CognitoErrors.cognitoError(err);
            res.status(response.content.statusCode).send(response);
        });
    } else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    }
}

exports.modifyUser = function(req, res) {    
    if(req.body != null && APIAuth.checkKey(req)) {
        AppUserPool.modifyUser(req.body).then(modifyResult => {
            response.error = false;
            response.content = modifyResult;
            res.status(200).send(response);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = CognitoErrors.cognitoError(err);
            res.status(response.content.statusCode).send(response);
        });
    } else{
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    }
};

exports.deleteUser = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)) {
        AppUserPool.deleteUser(req.body).then(deleteResult => {
            response.error = false;
            response.content = deleteResult;
            res.status(200).send(response);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = CognitoErrors.cognitoError(err);
            res.status(response.content.statusCode).send(response);
        });
    }else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    }
};