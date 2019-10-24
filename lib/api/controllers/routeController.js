var APIAuth = require("../../auth/APIAuth");
var uuid = require("uuid");
var DynamoDB = require("../../database/DynamoDB");
var CognitoErrors = require('../../auth/CognitoErrors')
var DynamoDBErrors = require('../../database/DynamoDBErrors')

var response = {
    error: null,
    content: null,
}

exports.getRoutes = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.getRoutes(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Routes in routes attribute.",
                routes: result,
            }
            res.status(200).send(response);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = DynamoDBErrors.DynamoDBError(err);
            res.status(response.content.statusCode).send(response);
        })
    } else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    };
};

exports.createRoute = function(req, res) {
    console.log(req);
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.addRoute(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Route added or updated successfully.",
                routeId: req.body.route_id,
            }
            res.status(200).send(response);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = DynamoDBErrors.DynamoDBError(err);
            res.status(response.content.statusCode).send(response);
        })
    } else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    };
};

exports.modifyRoute = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.addRoute(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Route added or updated successfully.",
                route_id: req.body.routeId,
            }
            res.status(200).send(response);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = DynamoDBErrors.DynamoDBError(err);
            res.status(response.content.statusCode).send(response);
        })
    } else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    };
};

exports.deleteRoute = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.deleteRoute(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Route deleted successfully.",
            }
            res.status(200).send(response);
        }).catch(err => {
            // Error was generated, update response and send.
            response.error = true;
            response.content = DynamoDBErrors.DynamoDBError(err);
            res.status(response.content.statusCode).send(response);
        })
    } else {
        response.error = true;
        var error = {code:"RequestFormatError"}
        response.content = CognitoErrors.cognitoError(error);
        res.status(response.content.statusCode).send(response)
    };
};