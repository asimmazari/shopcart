var URLSearchParams = require('url-search-params');
var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars'); 
var Handlebars = require('handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var logger = require('morgan');
var favicon = require('serve-favicon');
var favicon = require('express-favicon');
var indexRouter = require('./routes/index');
var woman = require('./routes/woman');
var man = require('./routes/man');
var kids = require('./routes/kids');
var accessories = require('./routes/accessories');
var newIn = require('./routes/newIn');
var home = require('./routes/home');
var app = express();
//pagination lawn_vol_1
Handlebars.registerHelper('ifet',function(v1,v2,options){
      var v3 = Number(v1);
	  var v4 = Number(v2);
	 if(v3 === v4){	
     return options.fn(this);
	 }
	 return options.inverse(this);
});
Handlebars.registerHelper('iflet',function(v1,v2,options){
	 if(v1 <= v2){	
     return options.fn(this);
	 }
	 return options.inverse(this);
});

Handlebars.registerHelper('times',function(v1,v2,v5,options){
      var i = Number(v1);
	   var v3 = (Number(v2) + 4);
		var pg = Number(v5);
		if(v3 > pg)
			v3=pg;
var accum = '';
	for(i = v1; i <= v3; i++)
	 accum += options.fn(i);
   return accum;	
});
Handlebars.registerHelper('times2',function(v1,v2,v5,options){
      var v3 = (Number(v1) - 4);
	   var v4 = (Number(v2) + 4);
	   var pg = Number(v5);
	   if(v4 => pg)
		   v4=pg;
var accum = '';
	for(var i = v3; i <= v4; i++)
	 accum += options.fn(i);
   return accum;
});
Handlebars.registerHelper('forCurrent',function(v1,v2,options){
       var i = Number(v1);
	   var v3 = (Number(v2) + 4);
	   var accum = '';
	for(i = v1; i <= v3; i++)
	   if(i === v2){	
		accum += options.fn(i);
        return accum;
	 }
		 return options.inverse(this);	
});

Handlebars.registerHelper('forCurrent2',function(v1,v2,options){
       var v3 = (Number(v1) - 4);
	   var v4 = (Number(v2) + 4);
	   var accum = '';
	for(var i = v3; i <= v4; i++)
	   if(i === v2){	
		accum += options.fn(i);
        return accum;
	 }
		 return options.inverse(this);	
});
Handlebars.registerHelper('forCurrent3',function(v1,v2,options){
       var i = Number(v1);
	   var v3 = (Number(v2) + 4);
	   var accum = '';
	for(i = v1; i <= v3; i++)
	   if(i === v3){	
		return options.fn(this);
	 }
		 return options.inverse(this);		
});

Handlebars.registerHelper('ifgt',function(v1,v2,options){
	if(v1 > v2){	
     return options.fn(this);
	 }
	 return options.inverse(this);
});
Handlebars.registerHelper('ifnet',function(v1,v2,options){
	var i = v1-4;
	if(i !== v2){	
     return options.fn(this);
	 }
	 return options.inverse(this);
});
Handlebars.registerHelper('iflt',function(v1,v2,options){
	 if(v1 < v2){	
     return options.fn(this);
	 }
	 return options.inverse(this);
});

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://mazari:karachi3129@ds159110.mlab.com:59110/shopcart';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.engine('.hbs',exphbs({extname: '.hbs'}));
app.set('view engine','.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave:true, saveUninitialized:true , cookie: {maxAge: 6000}}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/woman',woman);
app.use('/man',man);
app.use('/kids',kids);
app.use('/accessories',accessories);
app.use('/newIn',newIn);
app.use('/home',home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
