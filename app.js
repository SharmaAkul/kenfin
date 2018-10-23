var createError = require('http-errors');
var session = require('express-session');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
require('./models/db');

var indexRouter = require('./routes/index');
//const apiRoutes=require('./app_api/routes/index');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:"kenfinsession",resave:false,saveUninitialized:true}));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',function( req,res,next){
res.header('Access-Control-Allow-Origin','http://localhost:4200');
res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
next();
});

app.use('/', indexRouter);
//app.use('/api', apiRoutes);

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
