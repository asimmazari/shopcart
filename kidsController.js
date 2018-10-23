var girls_kurta = require('../models/kids_girls_ethnic_kurta');
exports.kurta_page = function(req,res){
 res.render('kids/girls_ethnic/kurta', { title:'Girls Kurta - Classic Pk '});
};

var kurtaPajama = require('../models/kids_girls_ethnic_kurtaPajama');
exports.kurtaPajama_page = function(req,res){
 res.render('kids/girls_ethnic/kurtaPajama', { title:'Girls Kurta Pajama - Classic Pk '});
};

var pants = require('../models/kids_girls_ethnic_pants');
exports.pants_page = function(req,res){
 res.render('kids/girls_ethnic/pants', { title:'Girls Pants - Classic Pk '});
};

var formalSuits = require('../models/kids_girls_ethnic_formalSuits');
exports.formalSuits_page = function(req,res){
 res.render('kids/girls_ethnic/formalSuits', { title:'Girls Formal Suits - Classic Pk '});
};

var blouses = require('../models/kids_girls_western_blouses');
exports.blouses_page = function(req,res){
 res.render('kids/girls_western/blouses', { title:'Girls Blouses - Classic Pk '});
};

var dresses = require('../models/kids_girls_western_dresses');
exports.dresses_page = function(req,res){
 res.render('kids/girls_western/dresses', { title:'Girls Dresses - Classic Pk '});
};

var tights = require('../models/kids_girls_western_tights');
exports.tights_page = function(req,res){
 res.render('kids/girls_western/tights', { title:'Girls Tights - Classic Pk '});
};

var pants = require('../models/kids_girls_western_pants');
exports.pants_page = function(req,res){
 res.render('kids/girls_western/pants', { title:'Girls Pants - Classic Pk '});
};

var kurta = require('../models/kids_boys_ethnic_kurta');
exports.kurta_page = function(req,res){
 res.render('kids/boys_ethnic/kurta', { title:'Boys Kurta - Classic Pk '});
};

var kurtaPajama = require('../models/kids_boys_ethnic_kurtaPajama');
exports.kurtaPajama_page = function(req,res){
 res.render('kids/boys_ethnic/kurtaPajama', { title:'Boys Kurta Pajama- Classic Pk '});
};

var waistcoat = require('../models/kids_boys_ethnic_waistcoat');
exports.waistcoat_page = function(req,res){
 res.render('kids/boys_ethnic/waistcoat', { title:'Boys waistcoat- Classic Pk '});
};

var shalwar = require('../models/kids_boys_ethnic_shalwar');
exports.shalwar_page = function(req,res){
 res.render('kids/boys_ethnic/shalwar', { title:'Boys shalwar- Classic Pk '});
};

var denim = require('../models/kids_boys_western_denim');
exports.denim_page = function(req,res){
 res.render('kids/boys_western/denim', { title:'Boys Denim- Classic Pk '});
};

var tShirts = require('../models/kids_boys_western_tShirts');
exports.tShirts_page = function(req,res){
 res.render('kids/boys_western/tShirts', { title:'Boys T-Shirts- Classic Pk '});
};

var shirts = require('../models/kids_boys_western_shirts');
exports.shirts_page = function(req,res){
 res.render('kids/boys_western/shirts', { title:'Boys Shirts- Classic Pk '});
};




























var Kids = require('../models/kids');
// Display list of all kids.
exports.kids_list = function(req,res){
  res.send('NOT IMPLEMENTED: kids list');
};
// Display detail page for a specific kids.
exports.kids_detail = function(req,res){
  res.send('NOT IMPLEMENTED: kids detail' + req.params.id);

};
// Display kids create form on GET.
exports.kids_create_get = function(req,res){
	res.send('NOT IMPLEMENTED: Kids create GET');
};
// Handle kids create on POST.
exports.kids_create_post= function(req,res){
	res.send('NOT IMPLEMENTED: Kids create POST');
	
};
// Display kids delete form on GET.
exports.kids_delete_get = function(req,res){
	res.send('NOT IMPLEMENTED: Kids delete GET');
};
// Handle kids delete on POST.
exports.kids_delete_post = function(req,res){
	res.send('NOT IMPLEMENTED: Kids delete POST');
};
// Display kids update form on GET.
exports.kids_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Kids update GET');
};
// Handle kids update on POST.
exports.kids_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Kids update POST');
};