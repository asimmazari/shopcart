var basicKurta = require('../models/man_kurtas_basicKurta');
exports.basicKurta_page = function(req,res){
 res.render('man/kurtas/basicKurta', { title:'Basic Men Kurta | buy Basic Kurta for Men Online - Classic Pk '});
};

var kurtaShalwar = require('../models/man_kurtas_kurtashalwar');
exports.kurtaShalwar_page = function(req,res){
 res.render('man/kurtas/kurtaShalwar', { title:'Kurta Shalwar - Buy kurta Shalwar for Men - Classic Pk '});
};

var shalwarKameez = require('../models/man_kurtas_shalwarKameez');
exports.shalwarKameez_page = function(req,res){
 res.render('man/kurtas/shalwarKameez', { title:'Men Shalwar Kameez- Designer Shalwar Kameez - Classic Pk '});
};

var shortKurta = require('../models/man_kurtas_shortKurta');
exports.shortKurta_page = function(req,res){
 res.render('man/kurtas/shortKurta', { title:'Short Kurta - Buy Short Kurta for Men - Classic Pk '});
};

var pajama = require('../models/man_bottom_pajama');
exports.pajama_page = function(req,res){
 res.render('man/bottom/pajama', { title:'Pajama Men - Classic Pk '});
};

var shalwar = require('../models/man_bottom_shalwar');
exports.shalwar_page = function(req,res){
 res.render('man/bottom/shalwar', { title:' - Classic Pk '});
};

var embroidered = require('../models/man_waistcoats_embroidered');
exports.embroidered_page = function(req,res){
 res.render('man/waistcoats/embroidered', { title:' Embroidered Men Waistcoats - Classic Pk '});
};

var classic = require('../models/man_waistcoats_classic');
exports.classic_page = function(req,res){
 res.render('man/waistcoats/classic', { title:' Classic Men Waistcoats - Classic Pk '});
};





















var Man = require('../models/man');

exports.man_list = function(req,res){
  res.send('NOT IMPLEMENTED: Man list');
};

exports.man_detail = function(req,res){
  res.send('NOT IMPLEMENTED: Man detail: + req.params.id');

};
// Display man create form on GET.
exports.man_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: man create GET');
};

// Handle man create on POST.
exports.man_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: man create POST');
};

// Display man delete form on GET.
exports.man_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: man delete GET');
};

// Handle man delete on POST.
exports.man_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: man delete POST');
};

// Display man update form on GET.
exports.man_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: man update GET');
};

// Handle man update on POST.
exports.man_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: man update POST');
};