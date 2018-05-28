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