var unstitched = require('../models/newIn_woman_unstitched');
exports.unstitched_page = function(req,res){
 res.render('newIn/woman/unstitched', { title:' Women Unstitched- Classic Pk '});
};

var pret = require('../models/newIn_woman_pret');
exports.pret_page = function(req,res){
 res.render('newIn/woman/pret', { title:' Women Ready Made- Classic Pk '});
};

var khaas = require('../models/newIn_woman_khaas');
exports.khaas_page = function(req,res){
 res.render('newIn/woman/khaas', { title:' Women Khaas- Classic Pk '});
};

var bottoms = require('../models/newIn_woman_bottoms');
exports.bottoms_page = function(req,res){
 res.render('newIn/woman/bottoms', { title:' Women Bottoms- Classic Pk '});
};

var kurta = require('../models/newIn_man_kurta');
exports.kurta_page = function(req,res){
 res.render('newIn/man/kurta', { title:' Men Kurta- Classic Pk '});
};

var shalwarKameez = require('../models/newIn_man_shalwarKameez');
exports.shalwarKameez_page = function(req,res){
 res.render('newIn/man/shalwarKameez', { title:' Men Shalwar Kameez- Classic Pk '});
};

var boys = require('../models/newIn_kids_boys');
exports.boys_page = function(req,res){
 res.render('newIn/kids/boys', { title:' Boys - Classic Pk '});
};

var girls = require('../models/newIn_kids_girls');
exports.girls_page = function(req,res){
 res.render('newIn/kids/girls', { title:' Girls - Classic Pk '});
};

var woman = require('../models/newIn_accessories_woman');
exports.woman_page = function(req,res){
 res.render('newIn/accessories/woman', { title:' Women - Classic Pk '});
};

var others = require('../models/newIn_accessories_others');
exports.others_page = function(req,res){
 res.render('newIn/accessories/others', { title:' Others - Classic Pk '});
};
