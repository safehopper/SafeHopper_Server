const ValidationException = { 
    name: "ValidationException",
    code: "ValidationException",
    statusCode: 400,
    message: "One or more parameter values were invalid. Note: an attribute's value may not contain an empty string.",
};


exports.DynamoDBError = function(err) {
    console.log("CODE: " + err);
    switch(err.code){
        case "ValidationException":
            return ValidationException;
        default:
            return {
                name: "GenericError",
                code: "GenericError",
                statusCode: 500,
                message: "An error has occurred. Verify the validity of your request and try again.",
            }
    }
}