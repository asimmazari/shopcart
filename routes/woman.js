var express = require('express');
var router = express.Router();

var twopc_summer_vibes_controller = require('../controllers/womanController');
router.get('/twopc_summer_vibes',twopc_summer_vibes_controller.twopc_summer_vibes_page);

var luxury_collection_controller = require('../controllers/womanController');
router.get('/luxury_collection',luxury_collection_controller.luxury_collection_page);

var lawn_vol_1_controller = require('../controllers/womanController');
router.get('/lawn_vol_1',lawn_vol_1_controller.lawn_vol_1_page);

var lawn_vol_2_controller = require('../controllers/womanController');
router.get('/lawn_vol_2',lawn_vol_2_controller.lawn_vol_2_page);

var kurta_controller = require('../controllers/womanController');
router.get('/kurta',kurta_controller.kurta_page);

var semi_formals_controller = require('../controllers/womanController');
router.get('/semi_formals',semi_formals_controller.semi_formals_page);

var casual_controller = require('../controllers/womanController');
router.get('/casual',casual_controller.casual_page);

var formal_pants_controller = require('../controllers/womanController');
router.get('/formal_pants',formal_pants_controller.formal_pants_page);

var pants_controller = require('../controllers/womanController');
router.get('/pants',pants_controller.pants_page);

var shalwar_controller = require('../controllers/womanController');
router.get('/shalwar',shalwar_controller.shalwar_page);

var denim_controller = require('../controllers/womanController');
router.get('/denim',denim_controller.denim_page);

var tights_controller = require('../controllers/womanController');
router.get('/tights',tights_controller.tights_page);









module.exports = router;
