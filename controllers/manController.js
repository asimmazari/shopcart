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