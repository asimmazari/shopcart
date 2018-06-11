var express = require('express');
var router = express.Router();

var kurta_controller = require('../controllers/kidsController');
router.get('/kurta',kurta_controller.kurta_page);

var kurtaPajama_controller = require('../controllers/kidsController');
router.get('/kurtaPajama',kurtaPajama_controller.kurtaPajama_page);

var pants_controller = require('../controllers/kidsController');
router.get('/pants',pants_controller.pants_page);

var formalSuits_controller = require('../controllers/kidsController');
router.get('/formalSuits',formalSuits_controller.formalSuits_page);

var blouses_controller = require('../controllers/kidsController');
router.get('/blouses',blouses_controller.blouses_page);

var dresses_controller = require('../controllers/kidsController');
router.get('/dresses',dresses_controller.dresses_page);

var tights_controller = require('../controllers/kidsController');
router.get('/tights',tights_controller.tights_page);

var pants_controller = require('../controllers/kidsController');
router.get('/pants',pants_controller.pants_page);

var kurta_controller = require('../controllers/kidsController');
router.get('/kurta',kurta_controller.kurta_page);

var kurtaPajama_controller = require('../controllers/kidsController');
router.get('/kurtaPajama',kurtaPajama_controller.kurtaPajama_page);

var waistcoat_controller = require('../controllers/kidsController');
router.get('/waistcoat',waistcoat_controller.waistcoat_page);

var shalwar_controller = require('../controllers/kidsController');
router.get('/shalwar',shalwar_controller.shalwar_page);

var tShirts_controller = require('../controllers/kidsController');
router.get('/tShirts',tShirts_controller.tShirts_page);

var shirts_controller = require('../controllers/kidsController');
router.get('/shirts',shirts_controller.shirts_page);


module.exports = router;