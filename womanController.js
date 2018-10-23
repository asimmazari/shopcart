var twopc_summer_vibes = require('../models/woman_unstitched_summer_vibes');
exports.twopc_summer_vibes_page = function(req,res){
 res.render('woman/unstitched/twopc_summer_vibes', { title:'Unstitched Fabrics & Suits-Woman-Classic Pk '});
};

var luxury_collection = require('../models/woman_unstitched_luxury_collection');
exports.luxury_collection_page = function(req,res){
 res.render('woman/unstitched/luxury_collection', { title:'Luxury Collection - Unstitched - Women - Classic Pk '});
};
 var lawn_vol_1s = require('../models/woman_unstitched_lawn_vol_1');
 exports.lawn_vol_1_page = function(req,res,next){

 var criteria = [];
 
 if(req.query.color != undefined && req.query.color != null){
	criteria.push({'color':req.query.color});
	console.log(req.query.color);
 } 	 
 if(req.query.category != undefined && req.query.category != null){
	 criteria.push({category:req.query.category});
	 	console.log(req.query.category);

 }	
 if(req.query.piece != undefined && req.query.piece != null){
	 criteria.push({piece:req.query.piece});
	 	console.log(req.query.piece);

 }
  if(req.query.material != undefined && req.query.material != null){
	 criteria.push({material:req.query.material}); 
	 	console.log(req.query.material);

  }
  if(req.query.design != undefined && req.query.design != null){
	 criteria.push({design:req.query.design});
	 	console.log(req.query.design);

  }
  if(req.query.size != undefined && req.query.size != null){
	 criteria.push({size:req.query.size});
	 	console.log(req.query.size);

  }
  if(req.query.price != undefined && req.query.price != null){
	 criteria.push({price:req.query.price});
	 	console.log(req.query.price);

  }
 criteria = criteria.length > 0 ? {$and:criteria} : {};
console.log(criteria);
 req.query.productPerPage = parseInt(req.query.productPerPage);
 var perPage = req.query.productPerPage ||8;
 console.log(perPage);
 req.query.page = parseInt(req.query.page);
 var page = req.query.page || 1;
 console.log(page);
 lawn_vol_1s
 .find(criteria)
 .skip((perPage * page)- perPage)
 .limit(perPage)
 .exec(function(err,lawn_vol_1){
 lawn_vol_1s.count().exec(function(err,count){
 if(err)return next(err)
 var woman_unstitched_lawn_vol_1Chunks = [];
 var chunkSize = 2;
 for(var i = 0; i < lawn_vol_1.length; i += chunkSize){
  woman_unstitched_lawn_vol_1Chunks.push(lawn_vol_1.slice(i,i+chunkSize));
	}
  res.render('woman/unstitched/lawn_vol_1', { title:'Classic Summer Lawn Collection - 2018 - vol1 - Classic Pk ',
  woman_unstitched_lawn_vol_1s: woman_unstitched_lawn_vol_1Chunks,
	lawn_vol_1: lawn_vol_1,
	current: page,
	pages:Math.ceil(count / perPage),
 
	})
		 })
	 })
} var lawn_vol_2 = require('../models/woman_unstitched_lawn_vol_2');
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
}