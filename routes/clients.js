'use strict';
var express = require('express');
var apiRouter = express.Router();

var data = require('../data/dummy');


/**********     Routes for rendering templates Client area   **********/
apiRouter.get('/', function (req, res, next) {
    res.render('users/client/dashboard.ejs', { title: 'Client Dashboard', user: data.user, projects: data.projects, currentIdx: 0 });
});

apiRouter.get('/register', function (req, res, next) {
    res.render('website/registration/register.ejs', { title: 'Welcome to SalesFort', user: data.user, isClient: true, currentIdx: 4 });
});


apiRouter.get('/settings/account', function (req, res, next) {
    res.render('users/client/settings/account.ejs', { title: 'Settings | Account', user: data.user, currentIdx: 1 });
});

apiRouter.get('/settings/billing', function (req, res, next) {
    res.render('users/client/settings/billing.ejs', { title: 'Settings | Billing', user: data.user, currentIdx: 2, cards: data.cards, payments: data.payments });
});


apiRouter.get('/settings/numbers', function (req, res, next) {
    res.render('users/client/settings/numbers.ejs', { title: 'Settings | My Numbers', user: data.user, currentIdx: 3, callingList: data.callingList });
});


apiRouter.get('/agents/list', function (req, res, next) {    
    res.render('users/client/agents.ejs', { title: 'Search Agents', user: data.user, agents: data.agents, currentIdx: 5, projects: data.projects  });
});


apiRouter.get('/integrations', function (req, res, next) {
    res.render('users/client/integrations.ejs', { title: 'Settings | Integrations', user: data.user, apiKey: data.apiKey, currentIdx: 7});
});


apiRouter.get('/projects/list', function (req, res, next) {
    res.render('users/client/project/list-projects.ejs', { title: 'Browse My Projects', user: data.user, projects: data.projects, currentIdx: 6 });
});

apiRouter.get('/project/:id', function (req, res, next) {
    var project = data.projects.filter(function(prj) { return prj.id == req.params.id; })[0];
    res.render('users/client/project/projectview.ejs', { currentIdx: 6, title: project.title, user: data.user, project: project });
});

apiRouter.get('/project-edit/:id', function (req, res, next) {
    var project = data.projects.filter(function(prj) { return prj.id == req.params.id; })[0];
    res.render('users/client/project/project-edit.ejs', { currentIdx: 6, title: 'Edit ' + project.title, user: data.user, project: project });
});

apiRouter.get('/chat', function (req, res, next) {
    res.render('users/client/chat.ejs', { currentIdx: 10, title: 'Chat Room', user: data.user, projects: data.projects });
});

apiRouter.get('/notifications', function (req, res, next) {
    res.render('users/client/notifications.ejs', { currentIdx: 10, title: 'Notifications', user: data.user });
});


module.exports = apiRouter;