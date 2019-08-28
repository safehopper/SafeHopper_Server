var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var routeController = require('../controllers/routeController');
var contactsController = require('../controllers/contactsController');
var alertsController = require('../controllers/alertsController');

// Define user routes
router.get('/user', userController.getUserInfo);
router.post('/user', userController.createUser);
router.put('/user', userController.modifyUser);
router.delete('/user', userController.deleteUser);
router.post('user/authenticate', userController.loginUser);

// Define route routes
router.get('/routes', routeController.getRoutes);
router.post('/routes', routeController.createRoute);
router.put('/routes', routeController.modifyRoute);
router.delete('/routes', routeController.deleteRoute);

// Define contacts routes
router.get('/contacts', contactsController.getContacts);
router.post('/contacts', contactsController.createContact);
router.put('/contacts', contactsController.modifyContact);
router.delete('/contacts', contactsController.deleteContact);

// Define alerts routes
router.get('/alerts', alertsController.getAlerts);
router.post('/alerts', alertsController.createAlert);
router.put('/alerts', alertsController.modifyAlert);
router.delete('/alerts', alertsController.deleteAlert);
router.post('/alerts/trigger', alertsController.triggerAlert);

module.exports = router;