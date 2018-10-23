var home = require('../models/home');

exports.index = function(req,res){
 res.render('index', { title:' Classic Official Website'});
};