var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');
var article = require('./routes/article');
var friend = require('./routes/friend');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'my administrator interface',
	cookie:{
		maxAge: 3600000,
	}
}));

app.use(function(req,res,next){
	res.locals.username = '';
	if(req.session.user) res.locals.username = req.session.user.username;
	next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'uploadImgs')));

app.use('/', index);
app.use('/users', users);
app.use('/admin', admin);
app.use('/article', article);
app.use('/friend', friend);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
