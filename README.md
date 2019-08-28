# SafeHopper Server Endpoints

Note: Not all endpoints have been implemented, you will receive a response of 

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
