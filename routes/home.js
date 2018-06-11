var express = require('express');
var router = express.Router();

// Require controller modules.
//var kids_controller = require('../controllers/kidsController');
//var man_controller = require('../controllers/manController');
//var ready_controller = require('../controllers/readyController');
//var unstitched_controller = require('../controllers/unstitchedController');
 var home_controller = require('../controllers/homeController');
// GET home page.
router.get('/',home_controller.index);
//company  about page
var about_controller = require('../controllers/aboutController');
router.get('/about', about_controller.about_page);

// company contact page
var contact_controller = require('../controllers/contactController');
router.get('/contact', contact_controller.contact_page);
//company careers page
var career_controller = require('../controllers/careerController');
router.get('/career', career_controller.career_page);
//customer support page customer services
var customer_controller = require('../controllers/customerController');
router.get('/customer', customer_controller.customer_page);
//customer support page storelocator
var storelocator_controller = require('../controllers/storelocatorController');
router.get('/storelocator', storelocator_controller.storelocator_page);
//customer support page shipping & handling
var handling_controller = require('../controllers/handlingController');
router.get('/handling', handling_controller.handling_page);
//customer support page return & exchange
var exchange_controller = require('../controllers/exchangeController');
router.get('/exchange', exchange_controller.exchange_page);
//customer support page disclaimer
var disclaimer_controller = require('../controllers/disclaimerController');
router.get('/disclaimer', disclaimer_controller.disclaimer_page);
//help term and conditions page
var term_controller = require('../controllers/termController');
router.get('/term', term_controller.term_page);
//help privacy policy page
var privacy_controller = require('../controllers/privacyController');
router.get('/privacy', privacy_controller.privacy_page);

/// kids ROUTES ///

// GET request for creating kids. NOTE This must come before route for id (i.e. display kids).
//router.get('/kids/create', kids_controller.kids_create_get);

// POST request for creating kids.
//router.post('/kids/create', kids_controller.kids_create_post);

// GET request to delete kids.
//router.get('/kids/:id/delete', kids_controller.kids_delete_get);

// POST request to delete kids.
//router.post('/kids/:id/delete', kids_controller.kids_delete_post);

// GET request to update kids.
//router.get('/kids/:id/update', kids_controller.kids_update_get);

// POST request to update kids.
//router.post('/kids/:id/update', kids_controller.kids_update_post);
// GET request for one kids.
//router.get('/kids/:id', kids_controller.kids_detail);
// GET request for list of all kids.
//router.get('/kids', kids_controller.kids_list);

/// man ROUTES ///

// GET request for creating man. NOTE This must come before route for id (i.e. display man).
//router.get('/man/create', man_controller.man_create_get);

// POST request for creating man.
//router.post('/man/create', man_controller.man_create_post);

// GET request to delete man.
//router.get('/man/:id/delete', man_controller.man_delete_get);

// POST request to delete man.
//router.post('/man/:id/delete', man_controller.man_delete_post);

// GET request to update man.
//router.get('/man/:id/update', man_controller.man_update_get);

// POST request to update man.
//router.post('/man/:id/update', man_controller.man_update_post);
// GET request for one man.
//router.get('/man/:id', man_controller.man_detail);
// GET request for list of all man.
//router.get('/man',man_controller.man_list);


module.exports = router;