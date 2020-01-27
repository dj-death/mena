'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var clientsRoutes = require('./routes/clients');
var agentsRoutes = require('./routes/agents');

var adminRoutes = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/assets/img/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/client', clientsRoutes);
app.use('/agent', agentsRoutes);
app.use('/admin', adminRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    if (req.user) {
        return next();
    }
    res.status(404);
    if (app.get('env') !== 'production') {
    }
    // respond with json
    if (/application\/json/.test(req.get('accept'))) {
        res.send({ message: '404 Not found! URL: ' + req.url });
        return;
    }
    // respond with html page
    res.set('Content-Type', 'text/html; charset=utf-8');
    if (req.accepts('html')) {
        res.render('page404.ejs', {
            currentIdx: 0,
            'title': '404 Page Not Found',
            'url': req.url
        });
        return;
    }
    // default to plain-text. send()
    res.type('txt').send('Not found');
});
app.use(function (err, req, res, next) {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    if ((typeof err.message !== 'undefined' && err.message.toLowerCase().substr(0, 6) == 'cancel') || typeof err.errorCode !== 'undefined') {
        // respond promise stop chains info with no system error
        console.log('400 Error. ', 'Message:', err.message);
        res.status(err.status || 400);
        // respond with json
        if (/application\/json/.test(req.get('accept'))) {
            res.send({
                currentIdx: 0,
                title: '400 Data Error',
                message: err.message,
                errorCode: err.errorCode
            });
            return;
        }
        res.set('Content-Type', 'text/html; charset=utf-8');
        // respond with html page
        if (req.accepts('html')) {
            res.render('page500.ejs', {
                currentIdx: 0,
                'title': '400 Data Error',
                'error': err.message
            });
            return;
        }
    }
    
    else {
        // respond 500 system error
        console.info(err);
        res.status(err.status || 500);
        // respond with json
        if (/application\/json/.test(req.get('accept'))) {
            res.send({
                currentIdx: 0,
                title: '500 System Error',
                message: err.message
            });
            return;
        }
        res.set('Content-Type', 'text/html; charset=utf-8');
        // respond with html page
        if (req.accepts('html')) {
            res.render('page500.ejs', {
                currentIdx: 0,
                'title': '500 System Error',
                'error': err.message
            });
            return;
        }
    }
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
