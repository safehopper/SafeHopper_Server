const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

const poolData = {    
    UserPoolId : "us-east-1_ZTWsSefyF", // Your user pool id here    
    ClientId : "5b7mkr5h6epvkmjgfo8un54nq4" // Your client id here
}; 
const pool_region = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


exports.registerUser = function(requestBody) {
    var attributeList = [];
    var response = null;
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"given_name",Value:requestBody.firstName}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"family_name",Value:requestBody.lastName}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"preferred_username",Value:requestBody.username}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:requestBody.email}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:requestBody.phone}));

    return new Promise((resolve, reject) => {
        userPool.signUp(requestBody.email, requestBody.password, attributeList, null, function(err, result){
        console.log('inside');
        if (err) {
          console.log(err.message);
          reject(err);
        } else {
            cognitoUser = result.user
            resolve(cognitoUser)
        }
        });
    });
}
