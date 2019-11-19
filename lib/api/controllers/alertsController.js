var APIAuth = require("../../auth/APIAuth");
var uuid = require("uuid");
var DynamoDB = require("../../database/DynamoDB");
var CognitoErrors = require('../../auth/CognitoErrors')
var DynamoDBErrors = require('../../database/DynamoDBErrors')

var response = {
    error: null,
    content: null,
}

exports.createAlert = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.addAlert(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Alert added or updated successfully.",
                alertId: req.body.alertId,
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

exports.modifyAlert = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.addAlert(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Alert added or updated successfully.",
                alert_id: req.body.alertID,
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

exports.deleteAlert = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.endAlert(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Alert deleted successfully.",
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

exports.getAlert = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.getAlert(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.headers = {
                "x-custom-header" : "my custom header value",
                "Access-Control-Allow-Origin": "my-origin.com"
            },
            response.content = {
                message: "Alert in waypoints attribute.",
                waypoints: result,
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
}