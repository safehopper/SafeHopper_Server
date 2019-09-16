# SafeHopper Server Endpoints

Note: Not all endpoints have been implemented, you will receive a response of "NOT IMPLEMENTED: [ Feature ]" if the feature has not been implemented yet.

Base URL: https://safe-hopper-server.herokuapp.com/

**Users**
----

* **User Flow**
  To use a new user create a new user > confirm that user > log them in.

* **Create New User**

  Adds a new user to the user pool

  * ***URL***

    /user
  
  * ***Method***

    POST
  
  * ***Params***
    
    User information in the body of the request.
    
    Sample request:
      POST to https://safe-hopper-server.herokuapp.com/user/
      ```
	{
	"password":"Password1!",
	"firstName":"John",
	"lastName":"Doe",
	"phone": "+15555555555",
	"email":"johndoe@email.com",
	"key":"yourAPIKey"
	}
      ```
    
  * ***Successful Response***
    
    Returns a user object with new user's data.
    
* **Confirm a User**

  Confirms the user's email making it possible for them to log in.

  * ***URL***

    /user/confirm
  
  * ***Method***

    POST
  
  * ***Params***
    
    User's email and their confirmation code in the body of the request as a string.
    
    Sample request:
      POST to https://safe-hopper-server.herokuapp.com/user/confirm
      ```
	{
	  "email":"johndoe@email.com",
	  "mfaCode": "123456",
	  "key":"yourAPIKey"
	}
      ```
    
  * ***Successful Response***
    
    Response with content explaining confirmation result.
    
    Example:
    ```
	{
		"error": false,
		"content": {
			"confirmation": "SUCCESS"
			}
	}
    ```
    
* **Login User**

  Logs in a user.

  * ***URL***

    /user/authenticate
  
  * ***Method***

    POST
  
  * ***Params***
    
    User credentials in the body of the request.
    
    Sample request:
      POST to https://safe-hopper-server.herokuapp.com/user/authenticate
      ```
	{
		"email":"johndoe@email.com",
		"password":"Password1!",
		"key":"yourAPIKey"
	}
      ```
    
  * ***Successful Response***
    
    User object is returned.
    
* **Modify Existing User**

  Updates a user's phone, firstName, and/or lastName attributes in the user pool. The email and password sent are used to authenticate the user first, then the sent values will overwrite the existing values for phone, firstName, and lastName.

  * ***URL***

    /user
  
  * ***Method***

    PUT
  
  * ***Params***
    
    User attributes in the request body.
    
    Sample request:
    ```
    {
      "email":"johndoe@email.com"
      "password":"Password1!",
      "firstName":"John",
      "lastName":"Doe",
      "phone": "+15555555",
      "key":"yourAPIKey"
    }
    ```
    
  * ***Successful Response***
    Example:
    ```
    {
      "error": false,
      "content": {
          "modifyResult": "SUCCESS"
      }
    }
    ```
    
* **Delete User**

  Removes user and all associated routes, contacts, and alerts from user pool

  * ***URL***

    /user
  
  * ***Method***

    DELETE
  
  * ***Params***
    
    User email and password in body of the request.
    
    Sample request:
    ```
	{
		"email":"johndow@email.com",
		"password":"Password1!",
		"key":"yourAPIKey"
	}
    ```
    
  * ***Successful Response***
    Example:
    ```
	{
		"error": false,
		"content": {
			"deleteResult": "SUCCESS"
		}
	}
    ```

    
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
