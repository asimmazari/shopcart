var footwear = require('../models/accessories_woman_footwear');
exports.footwear_page = function(req,res){
 res.render('accessories/woman/footwear', { title:'Women Footwear- Classic Pk '});
};

var fragrance = require('../models/accessories_woman_fragrance');
exports.fragrance_page = function(req,res){
 res.render('accessories/woman/fragrance', { title:'Women fragrance- Classic Pk '});
};

var jewelry = require('../models/accessories_woman_jewelry');
exports.jewelry_page = function(req,res){
 res.render('accessories/woman/jewelry', { title:'Women jewelry- Classic Pk '});
};

var handbags = require('../models/accessories_woman_handbags');
exports.handbags_page = function(req,res){
 res.render('accessories/woman/handbags', { title:'Women Handbags- Classic Pk '});
};

var clutches = require('../models/accessories_woman_clutches');
exports.clutches_page = function(req,res){
 res.render('accessories/woman/clutches', { title:'Women Clutches- Classic Pk '});
};

var scarves = require('../models/accessories_woman_scarves');
exports.scarves_page = function(req,res){
 res.render('accessories/woman/scarves', { title:'Women Scarves- Classic Pk '});
};

var sunglasses = require('../models/accessories_woman_sunglasses');
exports.sunglasses_page = function(req,res){
 res.render('accessories/woman/sunglasses', { title:'Women Sunglasses- Classic Pk '});
};

var wallets = require('../models/accessories_woman_wallets');
exports.wallets_page = function(req,res){
 res.render('accessories/woman/wallets', { title:'Women Wallets- Classic Pk '});
};

var dupatta = require('../models/accessories_woman_dupatta');
exports.dupatta_page = function(req,res){
 res.render('accessories/woman/dupatta', { title:'Women dupatta- Classic Pk '});
};

var stole = require('../models/accessories_woman_stole');
exports.stole_page = function(req,res){
 res.render('accessories/woman/stole', { title:'Women Stole- Classic Pk '});
};

var tankTops = require('../models/accessories_woman_tankTops');
exports.tankTops_page = function(req,res){
 res.render('accessories/woman/tankTops', { title:'Women Tank Tops- Classic Pk '});
};

var bags = require('../models/accessories_girls_bags');
exports.bags_page = function(req,res){
 res.render('accessories/girls/bags', { title:'Girls Bags- Classic Pk '});
};

var hairAccessories = require('../models/accessories_girls_hairAccessories');
exports.hairAccessories_page = function(req,res){
 res.render('accessories/girls/hairAccessories', { title:'Girls Hair Accessories- Classic Pk '});
};

var jewelry = require('../models/accessories_girls_jewelry');
exports.jewelry_page = function(req,res){
 res.render('accessories/girls/jewelry', { title:'Girls Jewelry- Classic Pk '});
};

var notebooks = require('../models/accessories_others_notebooks');
exports.notebooks_page = function(req,res){
 res.render('accessories/others/notebooks', { title:' Note Books- Classic Pk '});
};

