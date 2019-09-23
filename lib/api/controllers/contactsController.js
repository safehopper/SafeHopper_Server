var DynamoDB = require('../../database/DynamoDB')
var APIAuth = require('../../auth/APIAuth');
var CognitoErrors = require('../../auth/CognitoErrors')
var DynamoDBErrors = require('../../database/DynamoDBErrors')

var response = {
    error: null,
    content: null,
}

exports.getContacts = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.getContacts(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Contacts in contacts attribute.",
                contacts: result,
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

exports.createContact = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req) && checkJSONContactObject(req.body)){
        DynamoDB.addContact(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Contact added or updated successfully.",
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

exports.modifyContact = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req) && checkJSONContactObject(req.body)){
        DynamoDB.addContact(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Contact added or updated successfully.",
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

exports.deleteContact = function(req, res) {
    if(req.body != null && APIAuth.checkKey(req)){
        DynamoDB.deleteContact(req.body).then(result => {
            // Contact was successfully added.
            response.error = false;
            response.content = {
                message: "Contact deleted successfully.",
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

function checkJSONContactObject(json) {
  if(json.firstName == undefined){
      return false;
  }
  if(json.lastName == undefined){
      return false;
  }
  if(json.phone == undefined){
    return false;
  }
  if(json.email == undefined){
    return false;
  }
  if(json.textAlert == undefined){
    return false;
  }
  if(json.emailAlert == undefined){
    return false;
  }
  if(json.contactOf == undefined){
    return false;
  }
  return true;
}