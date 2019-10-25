var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var routeController = require('../controllers/routeController');
var contactsController = require('../controllers/contactsController');
var alertsController = require('../controllers/alertsController');

router.get('/', function (req, res) {
    res.render('index');
  })

// Define user routes
router.get('/user', userController.getUserInfo);
router.post('/user', userController.createUser);
router.put('/user', userController.modifyUser);
router.delete('/user', userController.deleteUser);
router.post('/user/authenticate', userController.loginUser);
router.post('/user/confirm', userController.confirmUser);

// Define route routes
router.post('/routes/getroutes', routeController.getRoutes);
router.post('/routes', (req, res) => {console.log(req); routeController.createRoute(req, res)});
router.put('/routes', routeController.modifyRoute);
router.delete('/routes', routeController.deleteRoute);

// Define contacts routes
router.post('/contacts/getcontacts', contactsController.getContacts);
router.post('/contacts', contactsController.createContact);
router.put('/contacts', contactsController.modifyContact);
router.delete('/contacts', contactsController.deleteContact);

// Define alerts routes
router.post('/alerts', alertsController.createAlert);
router.put('/alerts', alertsController.modifyAlert);
router.delete('/alerts', alertsController.deleteAlert);

module.exports = router;