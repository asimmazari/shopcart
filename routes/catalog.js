var express = require('express');
var router = express.Router();

// Require controller modules.
var kids_controller = require('../controllers/kidsController');
var man_controller = require('../controllers/manController');
var ready_controller = require('../controllers/readyController');
var unstitched_controller = require('../controllers/unstitchedController');

/// unstitched ROUTES ///
// GET catalog home page.
router.get('/',unstitched_controller.index);
// GET request for creating a unstitched. NOTE This must come before routes that display unstitched (uses id).
router.get('/unstitched/create', unstitched_controller.unstitched_create_get);

// POST request for creating unstitched.
router.post('/unstitched/create', unstitched_controller.unstitched_create_post);

// GET request to delete unstitched.
router.get('/unstitched/:id/delete', unstitched_controller.unstitched_delete_get);

// POST request to delete unstitched.
router.post('/unstitched/:id/delete', unstitched_controller.unstitched_delete_post);

// GET request to update unstitched.
router.get('/unstitched/:id/update', unstitched_controller.unstitched_update_get);

// POST request to update unstitched.
router.post('/unstitched/:id/update', unstitched_controller.unstitched_update_post);
// GET request for one unstitched.
router.get('/unstitched/:id' , unstitched_controller.unstitched_detail);
// GET request for list of all unstitched items.
router.get('/unstitched', unstitched_controller.unstitched_list);

/// ready ROUTES ///

// GET request for creating ready. NOTE This must come before route for id (i.e. display ready).
router.get('/ready/create', ready_controller.ready_create_get);

// POST request for creating ready.
router.post('/ready/create', ready_controller.ready_create_post);

// GET request to delete ready.
router.get('/ready/:id/delete', ready_controller.ready_delete_get);

// POST request to delete ready.
router.post('/ready/:id/delete', ready_controller.ready_delete_post);

// GET request to update ready.
router.get('/ready/:id/update', ready_controller.ready_update_get);

// POST request to update ready.
router.post('/ready/:id/update', ready_controller.ready_update_post);
// GET request for one ready.
router.get('/ready/:id', ready_controller.ready_detail);
// GET request for list of all ready.
router.get('/ready', ready_controller.ready_list);

/// kids ROUTES ///

// GET request for creating kids. NOTE This must come before route for id (i.e. display kids).
router.get('/kids/create', kids_controller.kids_create_get);

// POST request for creating kids.
router.post('/kids/create', kids_controller.kids_create_post);

// GET request to delete kids.
router.get('/kids/:id/delete', kids_controller.kids_delete_get);

// POST request to delete kids.
router.post('/kids/:id/delete', kids_controller.kids_delete_post);

// GET request to update kids.
router.get('/kids/:id/update', kids_controller.kids_update_get);

// POST request to update kids.
router.post('/kids/:id/update', kids_controller.kids_update_post);
// GET request for one kids.
router.get('/kids/:id', kids_controller.kids_detail);
// GET request for list of all kids.
router.get('/kids', kids_controller.kids_list);

/// man ROUTES ///

// GET request for creating man. NOTE This must come before route for id (i.e. display man).
router.get('/man/create', man_controller.man_create_get);

// POST request for creating man.
router.post('/man/create', man_controller.man_create_post);

// GET request to delete man.
router.get('/man/:id/delete', man_controller.man_delete_get);

// POST request to delete man.
router.post('/man/:id/delete', man_controller.man_delete_post);

// GET request to update man.
router.get('/man/:id/update', man_controller.man_update_get);

// POST request to update man.
router.post('/man/:id/update', man_controller.man_update_post);
// GET request for one man.
router.get('/man/:id', man_controller.man_detail);
// GET request for list of all man.
router.get('/man',man_controller.man_list);


module.exports = router;