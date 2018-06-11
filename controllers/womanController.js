var twopc_summer_vibes = require('../models/woman_unstitched_summer_vibes');
exports.twopc_summer_vibes_page = function(req,res){
 res.render('woman/unstitched/twopc_summer_vibes', { title:'Unstitched Fabrics & Suits-Woman-Classic Pk '});
};

var luxury_collection = require('../models/woman_unstitched_luxury_collection');
exports.luxury_collection_page = function(req,res){
 res.render('woman/unstitched/luxury_collection', { title:'Luxury Collection - Unstitched - Women - Classic Pk '});
};

var lawn_vol_1 = require('../models/woman_unstitched_lawn_vol_1');
exports.lawn_vol_1_page = function(req,res){
 res.render('woman/unstitched/lawn_vol_1', { title:'Classic Summer Lawn Collection - 2018 - vol1 - Classic Pk '});
};

var lawn_vol_2 = require('../models/woman_unstitched_lawn_vol_2');
exports.lawn_vol_2_page = function(req,res){
 res.render('woman/unstitched/lawn_vol_2', { title:'Classic Spring Lawn Collection - 2018 - vol1 - Classic Pk '});
};

var kurta = require('../models/woman_pret_kurta');
exports.kurta_page = function(req,res){
 res.render('woman/pret/kurta', { title:'Women Kurta-Ladies Kurti-Pret - Classic Pk '});
};

var semi_formals = require('../models/woman_khaas_semi_formals');
exports.semi_formals_page = function(req,res){
 res.render('woman/khaas/semi_formals', { title:'Semi Formals - Khaas - Woman - Classic Pk '});
};

var casual = require('../models/woman_khaas_casual');
exports.casual_page = function(req,res){
 res.render('woman/khaas/casual', { title:'casual Dresses for Women - Classic Pk '});
};

var formal_pants = require('../models/woman_bottoms_formal_pants');
exports.formal_pants_page = function(req,res){
 res.render('woman/bottoms/formal_pants', { title:'Formal Pants - Women Pants - Classic Pk '});
};

var pants = require('../models/woman_bottoms_pants');
exports.pants_page = function(req,res){
 res.render('woman/bottoms/pants', { title:'Women Pants - Embroidered & Straight Pants - Classic Pk '});
};

var shalwar = require('../models/woman_bottoms_shalwar');
exports.shalwar_page = function(req,res){
 res.render('woman/bottoms/shalwar', { title:'Women Shalwars | Tulip,Plain, Embroidered Shalwars - Classic Pk '});
};

var denim = require('../models/woman_bottoms_denim');
exports.denim_page = function(req,res){
 res.render('woman/bottoms/denim', { title:'Denim - Women  Jeans - Classic Pk '});
};

var tights = require('../models/woman_bottoms_tights');
exports.tights_page = function(req,res){
 res.render('woman/bottoms/tights', { title:'Tights for Women-Ladies Plain & Embroidered Tights - Classic Pk '});
};























exports.unstitched_list = function(req,res){
 res.send('NOT IMPLEMENTED: unstitched list');
};

exports.unstitched_detail = function(req,res){
 res.send('NOT IMPLEMENTED: Unstitched detail: + req.params.id');
};
// Display unstitched create form on GET.
exports.unstitched_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: unstitched create GET');
};

// Handle unstitched create on POST.
exports.unstitched_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: unstitched create POST');
};

// Display unstitched delete form on GET.
exports.unstitched_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: unstitched delete GET');
};

// Handle unstitched delete on POST.
exports.unstitched_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: unstitched delete POST');
};

// Display unstitched update form on GET.
exports.unstitched_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: unstitched update GET');
};

// Handle unstitched update on POST.
exports.unstitched_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: unstitched update POST');
};