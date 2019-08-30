var AppUserPool = require('../../auth/AppUserPool');

exports.getUserInfo = function(req, res) {
    res.status(200).send('NOT IMPLEMENTED: Get User Info');
};

exports.createUser = function(req, res) {
    if(req.body != null) {


        AppUserPool.registerUser(req.body).then(result => {
            console.log("GOOD");
        }).catch(err => {
            console.log(err.message);
        })


        
        res.status(200).send('NOT IMPLEMENTED: Create User');
    } else {
        res.status(500).send("Internal Error");
    }
};

exports.modifyUser = function(req, res) {
    res.status(200).send('NOT IMPLEMENTED: Modify User');
};

exports.deleteUser = function(req, res) {
    res.status(200).send('NOT IMPLEMENTED: Delete User');
};

exports.loginUser = function(req, res) {
    res.status(200).send('NOT IMPLEMENTED: Login User');
};