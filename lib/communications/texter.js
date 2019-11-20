var twilio = require('twilio');
var DynamoDB = require('../database/DynamoDB');

var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
var baseURL = 'https://master.d34e7o1nxh5a7i.amplifyapp.com/?query=';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

exports.sendMessage = function(req){
    getContacts(req);
}

function sendText(contacts, alertId, name) {
    for(var i = 0; i < contacts.length; i++){

        var message = "Alert from SafeHopper!\n" + name + " is requesting your help.\n\nFollow this link to see their location: " + baseURL + alertId;

        client.messages.create({
            body: message,
            to: contacts[i].phone,  // Text this number
            from: '+12563877224' // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
    }
}

function getContacts(req) {

    var body = {
        userEmail: req.email,
    }
    DynamoDB.getContacts(body).then(result => {
        sendText(result, req.alertId, req.name);
    }).catch(err => {
        // Error was generated, update response and send.
        console.log("ERROR: can't get contacts");
    })
}