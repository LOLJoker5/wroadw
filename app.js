var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');     //import index module
var users = require('./routes/users');     //import users module

var app = express();  //creates an express application

// view engine setup
// assign setting name to value,if name is one of the application settings,it affects the behavior of the application.
app.set('views', path.join(__dirname, 'views'));  //official:A directory or an array of directories for the application's views
app.set('view engine', 'ejs');  //official:The default engine extension to use when omitted.

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//Mounts the middleware function(s) at the path,if path is not specified,it defaults to '/'.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));   //该文件中的文件为静态文件，可以直接拿访问
app.use(express.static('public'));  //托管静态文件
// app.use('/static',express.static('public'));  //如果需要访问的文件都放在一个虚拟的目录下面，即可以用这种方法

app.use('/', index);
app.use(function(req,res,next){
    console.log('Time: %d', Date.now());
    next();
});
//
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
