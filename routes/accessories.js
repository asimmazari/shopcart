var express = require('express');
var router = express.Router();

var footwear_controller = require('../controllers/accessoriesController');
router.get('/footwear',footwear_controller.footwear_page);

var fragrance_controller = require('../controllers/accessoriesController');
router.get('/fragrance',fragrance_controller.fragrance_page);

var jewelry_controller = require('../controllers/accessoriesController');
router.get('/jewelry',jewelry_controller.jewelry_page);

var handbags_controller = require('../controllers/accessoriesController');
router.get('/handbags',handbags_controller.handbags_page);

var clutches_controller = require('../controllers/accessoriesController');
router.get('/clutches',clutches_controller.clutches_page);

var scarves_controller = require('../controllers/accessoriesController');
router.get('/scarves',scarves_controller.scarves_page);

var sunglasses_controller = require('../controllers/accessoriesController');
router.get('/sunglasses',sunglasses_controller.sunglasses_page);

var wallets_controller = require('../controllers/accessoriesController');
router.get('/wallets',wallets_controller.wallets_page);

var dupatta_controller = require('../controllers/accessoriesController');
router.get('/dupatta',dupatta_controller.dupatta_page);

var stole_controller = require('../controllers/accessoriesController');
router.get('/stole',stole_controller.stole_page);

var tankTops_controller = require('../controllers/accessoriesController');
router.get('/tankTops',tankTops_controller.tankTops_page);


module.exports = router;