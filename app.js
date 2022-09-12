// this block is where we require in the node_modules libraries needed to run express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//important! this is where we require in the routers for our express app
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// requiring blogs router
var blogsRouter = require('./routes/blogs');
// this initializing express for us
var app = express();

//setting up view engine/ignore this
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware functions for express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//important! this block is where we invoke the router we create
app.use('/', indexRouter);
app.use('/users', usersRouter);

//include blogs router in server routes
app.use('/blogs', blogsRouter);

//this code is for creating 404 error pages when url in request doesnt match a path
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// this block is for catching and handling errors
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//exports the app from the file
module.exports = app;
