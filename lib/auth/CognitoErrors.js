const UsernameExistsException = { 
    name: "UsernameExistsException",
    code: "UsernameExistsException",
    statusCode: 400,
    message: "Username or email already exists in the user pool",
};

const UserNotConfirmedException = { 
    code: 'UserNotConfirmedException',
    name: 'UserNotConfirmedException',
    statusCode: 401,
    message: 'User is not confirmed.', }

const InvalidPasswordException = {
    name: "InvalidPasswordException",
    code: "InvalidPasswordException",
    statusCode: 400,
    message: "Password did not conform with policy: Password must have lowercase and uppercase letters, a special character, and a number."
};

const UserNotFoundException = {
    name: 'UserNotFoundException',
    code: 'UserNotFoundException',
    statusCode: 400,
    message: 'User does not exist.',
}

const NotAuthorizedException = {
    name: "NotAuthorizedException",
    code: "NotAuthorizedException",
    statusCode: 400,
    message: "User is not authorized, or already confirmed.",
}

const InvalidParameterException = { 
    code: 'InvalidParameterException',
    name: 'InvalidParameterException',
    message: 'Atleast one parameter of your request is invalid. Please see https://github.com/safehopper/SafeHopper_Server/blob/master/README.md for endpoint documentation.' 
}

exports.cognitoError = function(err) {
    switch(err.code){
        case "InvalidPasswordException":
            return InvalidPasswordException;
        case "UsernameExistsException":
            return UsernameExistsException;
        case "NotAuthorizedException":
            return NotAuthorizedException;
        case "UserNotFoundException":
            return UserNotFoundException;
        case "UserNotConfirmedException":
            return UserNotConfirmedException;
        case "InvalidParameterException":
            return InvalidParameterException;
        default:
            return {
                name: "GenericError",
                code: "GenericError",
                statusCode: 500,
                message: "An error has occurred. Verify the validity of your request and try again.",
            }
    }
}