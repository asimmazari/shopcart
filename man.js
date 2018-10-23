var express = require('express');
var router = express.Router();

var basicKurta_controller = require('../controllers/manController');
router.get('/basicKurta',basicKurta_controller.basicKurta_page);

var kurtaShalwar_controller = require('../controllers/manController');
router.get('/kurtaShalwar',kurtaShalwar_controller.kurtaShalwar_page);

var shalwarKameez_controller = require('../controllers/manController');
router.get('/shalwarKameez',shalwarKameez_controller.shalwarKameez_page);

var shortKurta_controller = require('../controllers/manController');
router.get('/shortKurta',shortKurta_controller.shortKurta_page);

var pajama_controller = require('../controllers/manController');
router.get('/pajama',pajama_controller.pajama_page);

var shalwar_controller = require('../controllers/manController');
router.get('/shalwar',shalwar_controller.shalwar_page);


var embroidered_controller = require('../controllers/manController');
router.get('/embroidered',embroidered_controller.embroidered_page);

var classic_controller = require('../controllers/manController');
router.get('/classic',classic_controller.classic_page);



module.exports = router;