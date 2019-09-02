var AppUserPool = require('../../auth/AppUserPool');
var CognitoErrors = require('../../auth/CognitoErrors')

var response = {
    error: null,
    content: null,
}

exports.getUserInfo = function(req, res) {
    res.status(200).send('NOT IMPLEMENTED: Get User Info');
};

exports.createUser = function(req, res) {
    if(req.body != null) {
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
        res.status(500).send("Internal Error");
    }
};

exports.loginUser = function(req, res) {
    if(req.body != null) {
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
        res.status(500).send("Internal Error");
    }
};

exports.confirmUser = function(req, res) {
    if(req.body != null) {
        AppUserPool.confirmUser(req.body).then(user => {
            res.send(user);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = CognitoErrors.cognitoError(err);
            res.status(response.statusCode).send(response);
        });
    }
}

exports.modifyUser = function(req, res) {
    
    res.status(200).send('NOT IMPLEMENTED: Modify User');
};

exports.deleteUser = function(req, res) {
    // TODO: Delete user from user pool.
    res.status(200).send('NOT IMPLEMENTED: Delete User');
};