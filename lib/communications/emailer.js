// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
var DynamoDB = require('../database/DynamoDB');
// Set the region 
AWS.config.update({region: 'us-east-1'});
var baseURL = 'https://master.d34e7o1nxh5a7i.amplifyapp.com/?query=';

// Create sendEmail params 
var params = {
  Destination: { /* required */
    ToAddresses: []
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: ""
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'SafeHopper ALERT!'
     }
    },
  Source: 'safehopperalerts@gmail.com', /* required */
  ReplyToAddresses: [
     'safehopperalerts@gmail.com',
    /* more items */
  ],
};

exports.sendEmail = function(req) {
    getContacts(req);
}

function sendMessage(contacts, alertId, name) {
    if(contacts != null){
        var text = "SafeHopper Alert!\n" + name + 
                                    " is requesting your help.\n\n Follow this link to see their current loction:\n" + 
                                    baseURL + alertId;
        params.Message.Body.Html.Data = text;
        for(var i = 0; i < contacts.length; i++){
            params.Destination.ToAddresses[i] = contacts[i].email;
        }

        console.log(params.Destination.ToAddresses);
        // Create the promise and SES service object
        var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

        // Handle promise's fulfilled/rejected states
        sendPromise.then(
        function(data) {
            console.log(data.MessageId);
        }).catch(
            function(err) {
            console.error(err, err.stack);
        });
    }
}

function getContacts(req) {
    var body = {
        userEmail: req.email,
    }
    DynamoDB.getContacts(body).then(result => {
        sendMessage(result, req.alertId, req.name);
    }).catch(err => {
        // Error was generated
        console.log("ERROR: can't get contacts");
    })
}