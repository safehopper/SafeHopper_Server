const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');
require('dotenv').config()


const poolData = {    
    UserPoolId : process.env.COGNITO_USER_POOL_ID,   
    ClientId : process.env.COGNITO_CLIENT_ID,
}; 
const pool_region = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


exports.registerUser = function(requestBody) {
    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"given_name",Value:requestBody.firstName}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"family_name",Value:requestBody.lastName}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:requestBody.email}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:requestBody.phone}));

    return new Promise((resolve, reject) => {
        userPool.signUp(requestBody.email, requestBody.password, attributeList, null, function(err, result){
        if (err) {
          reject(err);
        } else {
            cognitoUser = result.user
            console.log("User " + cognitoUser.Username + " has been created.");
            resolve(cognitoUser)
        }
        });
    });
}

exports.loginUser = function(requestBody) {
    
    var userCredentials = new AmazonCognitoIdentity.AuthenticationDetails({
        Username : requestBody.email,
        Password : requestBody.password,
    });

    var userPoolInformation = {
        Username : requestBody.email,
        Pool : userPool,
    };

    var userToLogin = new AmazonCognitoIdentity.CognitoUser(userPoolInformation);

    return new Promise((resolve, reject) => {
        userToLogin.authenticateUser(userCredentials, {
            onSuccess: function (result) {
                resolve(result);
            },
            onFailure: function(err) {
                console.log(err);
                reject(err);
            },
    
        });
    })
}

exports.confirmUser = function(requestBody) {
    var userData = { 
        Username : requestBody.email,
        Pool : userPool
    };

    cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    return new Promise((resolve, reject) => {
        cognitoUser.confirmRegistration(requestBody.mfaCode, true, function(err, result) {
            if (err) {
                reject(err);
            } else {
                console.log("User " + userData.Username + " has been confirmed.");
                resolve(result);
            }
        });
    });
}