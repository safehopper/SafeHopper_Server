var AWS = require("aws-sdk");
var uuid = require("uuid");

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

exports.addContact = function(jsonContactObject){
  var tableName = "Contacts_Table";

  var params = {
    TableName:tableName,
    Item: {
      contact_id:jsonContactObject.contactOf + jsonContactObject.email,
      first_name: jsonContactObject.firstName,
      last_name: jsonContactObject.lastName,
      phone: jsonContactObject.phone,
      email: jsonContactObject.email,
      text_alerts: jsonContactObject.textAlert,
      email_alerts: jsonContactObject.emailAlert,
      contact_of:jsonContactObject.contactOf,
    }
  }

  return new Promise((resolve, reject) => {
    docClient.put(params, function(err, data) {
      if (err) {
          reject(err);
      } else {
          resolve(JSON.stringify(data, null, 2));
      }
    });
  });
  
}

exports.deleteContact = function(jsonContactObject) {
  var tableName = "Contacts_Table";

  var params = {
    TableName:tableName,
    Key:{
        contact_id : jsonContactObject.contactOf + jsonContactObject.email,
    }
  }  

  return new Promise((resolve, reject) => {
    docClient.delete(params, function(err, data) {
      if (err) {
          reject(err);
      } else {
          resolve(JSON.stringify(data, null, 2));
      }
    });
  });
}

exports.getContacts = function(jsonContactObject) {
  var tableName = "Contacts_Table";

  var params = {
    TableName: tableName,
    ProjectionExpression: "#contact, first_name, last_name, phone, email, email_alerts, text_alerts",
    FilterExpression: "#contact = :user_email",
    ExpressionAttributeNames: {
        "#contact": "contact_of",
    },
    ExpressionAttributeValues: {
         ":user_email": jsonContactObject.userEmail 
    }
  };
  return new Promise((resolve, reject) => {
    docClient.scan(params, onScan);

    function onScan(err, data) {
      if (err) {
          reject(err);
      } else {
          if (typeof data.LastEvaluatedKey != "undefined") {
              console.log("Scanning for more...");
              params.ExclusiveStartKey = data.LastEvaluatedKey;
              docClient.scan(params, onScan);
          }
          resolve(data.Items);
      }
    }
  });
}

exports.addRoute = function(jsonObject){
  var tableName = "Routes_Table";
  
  var params = {
    TableName:tableName,
    Item: {
      route_id: jsonObject.routeId,
      user_email:jsonObject.userEmail,
    }
  }

  return new Promise((resolve, reject) => {
    docClient.put(params, function(err, data) {
      if (err) {
          reject(err);
      } else {
          resolve(JSON.stringify(data, null, 2));
      }
    });
  });
  
}

exports.deleteRoute = function(jsonObject) {
  var tableName = "Routes_Table";
  console.log(jsonObject);
  var params = {
    TableName:tableName,
    Key:{
        route_id : jsonObject.routeId,
    }
  }  

  return new Promise((resolve, reject) => {
    docClient.delete(params, function(err, data) {
      if (err) {
          reject(err);
      } else {
          resolve(JSON.stringify(data, null, 2));
      }
    });
  });
}

exports.getRoutes = function(jsonObject) {
  var tableName = "Routes_Table";

  var params = {
    TableName: tableName,
    ProjectionExpression: "#user, route_id",
    FilterExpression: "#user = :user_email",
    ExpressionAttributeNames: {
        "#user": "user_email",
    },
    ExpressionAttributeValues: {
         ":user_email": jsonObject.userEmail 
    }
  };
  return new Promise((resolve, reject) => {
    docClient.scan(params, onScan);

    function onScan(err, data) {
      if (err) {
          reject(err);
      } else {
          if (typeof data.LastEvaluatedKey != "undefined") {
              console.log("Scanning for more...");
              params.ExclusiveStartKey = data.LastEvaluatedKey;
              docClient.scan(params, onScan);
          }
          resolve(data.Items);
      }
    }
  });
}

exports.addAlert = function(jsonObject){
  var tableName = "Alerts_Table";
  
  var params = {
    TableName:tableName,
    Item: {
      alert_id: jsonObject.alertId,
      user_email:jsonObject.userEmail,
    }
  }

  return new Promise((resolve, reject) => {
    docClient.put(params, function(err, data) {
      if (err) {
          reject(err);
      } else {
          resolve(JSON.stringify(data, null, 2));
      }
    });
  });
  
}

exports.endAlert = function(jsonObject) {
  var tableName = "Alerts_Table";
  console.log(jsonObject);
  var params = {
    TableName:tableName,
    Key:{
        alert_id : jsonObject.alertId,
    }
  }  

  return new Promise((resolve, reject) => {
    docClient.delete(params, function(err, data) {
      if (err) {
          reject(err);
      } else {
          resolve(JSON.stringify(data, null, 2));
      }
    });
  });
}