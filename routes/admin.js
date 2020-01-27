'use strict';

var express = require('express');
var apiRouter = express.Router();

/**********     Routes for rendering templates Admin   **********/

apiRouter.get('/', function (req, res, next) {
    res.render('admin/home.ejs', { title: 'Webmaster CRM' });
});

apiRouter.get('/agents', function (req, res, next) {
    res.render('admin/views/agents.ejs', { title: 'View Agents' });
});

apiRouter.get('/clients', function (req, res, next) {
    res.render('admin/views/clients.ejs', { title: 'View Clients' });
});

apiRouter.get('/numbers', function (req, res, next) {
    res.render('admin/views/numbers.ejs', { title: 'View Numbers' });
});

apiRouter.get('/orders', function (req, res, next) {
    res.render('admin/views/orders.ejs', { title: 'View Orders' });
});


apiRouter.get('/calls', function (req, res, next) {
    res.render('admin/views/calls.ejs', { title: 'View Call Call Recordings' });
});


apiRouter.get('/emails', function (req, res, next) {
    res.render('admin/views/emails.ejs', { title: 'Emails' });
});
 

module.exports = apiRouter;