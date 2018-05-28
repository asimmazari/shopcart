var Unstitched = require('../models/unstitched');

exports.index = function(req,res){
 res.render('index', { title:' Classic Official Website'});
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