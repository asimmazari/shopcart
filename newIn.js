var express = require('express');
var router = express.Router();

var unstitched_controller = require('../controllers/newInController');
router.get('/unstitched',unstitched_controller.unstitched_page);

var pret_controller = require('../controllers/newInController');
router.get('/pret',pret_controller.pret_page);

var khaas_controller = require('../controllers/newInController');
router.get('/khaas',khaas_controller.khaas_page);

var bottoms_controller = require('../controllers/newInController');
router.get('/bottoms',bottoms_controller.bottoms_page);

var kurta_controller = require('../controllers/newInController');
router.get('/kurta',kurta_controller.kurta_page);

var shalwarKameez_controller = require('../controllers/newInController');
router.get('/shalwarKameez',shalwarKameez_controller.shalwarKameez_page);

var boys_controller = require('../controllers/newInController');
router.get('/boys',boys_controller.boys_page);

var girls_controller = require('../controllers/newInController');
router.get('/girls',girls_controller.girls_page);

var woman_controller = require('../controllers/newInController');
router.get('/woman',woman_controller.woman_page);

var others_controller = require('../controllers/newInController');
router.get('/others',others_controller.others_page);


module.exports = router;