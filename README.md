# SafeHopper Server Endpoints

Note: Not all endpoints have been implemented, you will receive a response of "NOT IMPLEMENTED: <Feature>" if the feature has not been implemented yet.

**Users**
----
* **Get User Info**

  Returns user's information

  * ***URL***

    /user/{id}
  
  * ***Method***

    GET
  
  * ***Params***
    
    UserId in the url
    
  * ***Successful Response***
    
    Returns a user object with user's data.

* **Create New User**

  Adds a new user to the user pool

  * ***URL***

    /user
  
  * ***Method***

    POST
  
  * ***Params***
    
    User object in the body of the request.
    
  * ***Successful Response***
    
    Returns a user object with new user's data.
    
* **Login User**

  Logs in a user.

  * ***URL***

    /user/authenticate
  
  * ***Method***

    POST
  
  * ***Params***
    
    User credentials in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Modify Existing User**

  Updates a user's information in the user pool

  * ***URL***

    /user
  
  * ***Method***

    PUT
  
  * ***Params***
    
    User object in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Delete User**

  Removes user and all associated routes, contacts, and alerts from user pool

  * ***URL***

    /user/{id}
  
  * ***Method***

    DELETE
  
  * ***Params***
    
    User id in the url.
    
  * ***Successful Response***
    
    TBD
    
**Routes**
----
* **Get User's Routes**

  Returns user's routes.

  * ***URL***

    /routes/{userId}
  
  * ***Method***

    GET
  
  * ***Params***
    
    UserId in the url
    
  * ***Successful Response***
    
    TBD

* **Create New Route**

  Adds a new route to the user's routes.

  * ***URL***

    /routes
  
  * ***Method***

    POST
  
  * ***Params***
    
    Route object in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Modify Existing Route**

  Updates the route information.

  * ***URL***

    /routes
  
  * ***Method***

    PUT
  
  * ***Params***
    
    Route object in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Delete Route**

  Removes route for good.

  * ***URL***

    /routes/{routeId}
  
  * ***Method***

    DELETE
  
  * ***Params***
    
    Route id in the url.
    
  * ***Successful Response***
    
    TBD
    
**Alerts**
----
* **Get User's Alerts**

  Returns user's alerts

  * ***URL***

    /alerts/{id}
  
  * ***Method***

    GET
  
  * ***Params***
    
    UserId in the url
    
  * ***Successful Response***
    
    TBD
    
* **Create Alert**

  Adds a new alert to the user's alerts.

  * ***URL***

    /alerts
  
  * ***Method***

    POST
  
  * ***Params***
    
    Alert object in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Modify Existing Alert**

  Updates a user's alert.

  * ***URL***

    /user
  
  * ***Method***

    PUT
  
  * ***Params***
    
    Alert object in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Delete Alert**

  Removes alert for good.

  * ***URL***

    /alert/{id}
  
  * ***Method***

    DELETE
  
  * ***Params***
    
    Alert id in the url.
    
  * ***Successful Response***
    
    TBD
    
* **Trigger Alert**

  Triggers the alert. Sends notifications to contacts.

  * ***URL***

    /alerts/trigger/{alertId}
  
  * ***Method***

    POST
  
  * ***Params***
    
    Alert id in the url of the request.
    
  * ***Successful Response***
    
    TBD
    
**Contacts**
----
* **Get User's Contacts**

  Returns user's contacts.

  * ***URL***

    /contacts/{userId}
  
  * ***Method***

    GET
  
  * ***Params***
    
    UserId in the url
    
  * ***Successful Response***
    
    TBD

* **Create New Contact**

  Adds a new contact to the user's contacts.

  * ***URL***

    /contacts
  
  * ***Method***

    POST
  
  * ***Params***
    
    Contact object in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Modify Existing Contact**

  Updates the contact information.

  * ***URL***

    /contact
  
  * ***Method***

    PUT
  
  * ***Params***
    
    Contact object in the body of the request.
    
  * ***Successful Response***
    
    TBD
    
* **Delete Contact**

  Removes contact for good.

  * ***URL***

    /contacts/{contactId}
  
  * ***Method***

    DELETE
  
  * ***Params***
    
    Contact id in the url.
    
  * ***Successful Response***
    
    TBD
