var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHandlebars = require('express-handlebars');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('views',path.join(__dirname,'views')); // a folder called views to handle our views
app.engine('handlebars',expressHandlebars({defaultLayout:'layout'}));
app.set('view engine','handlebars'); // set view engine to handle bars


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
