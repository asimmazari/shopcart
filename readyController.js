var Ready = require('../models/ready');

exports.ready_list = function(req,res){
  res.send('NOT IMPLEMENTED: Ready list');
};

exports.ready_detail = function(req,res){
 res.send('NOT IMPLEMENTED: Ready detail:' + req.params.id);
};
// Display ready create form on GET.
exports.ready_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ready create GET');
};

// Handle ready create on POST.
exports.ready_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ready create POST');
};

// Display ready delete form on GET.
exports.ready_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ready delete GET');
};

// Handle ready delete on POST.
exports.ready_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ready delete POST');
};

// Display ready update form on GET.
exports.ready_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ready update GET');
};

// Handle ready update on POST.
exports.ready_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ready update POST');
};