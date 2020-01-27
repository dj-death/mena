'use strict';
var express = require('express');
var apiRouter = express.Router();

var data = require('../data/dummy');


/**********     Routes for rendering templates Agent   **********/
apiRouter.get('/', function (req, res, next) {
    res.render('users/agent/dashboard.ejs', { currentIdx: 0, title: 'Agent Dashboard', user: data.user, projects: data.projects, requests: data.requests, currentIdx: 0 });
});

apiRouter.get('/register', function (req, res, next) {
    res.render('website/registration/register.ejs', { currentIdx: 4, title: 'Welcome to SalesFort', isClient: false, currentIdx: 4 });
});


apiRouter.get('/profile', function (req, res, next) {
    res.render('users/agent/profile.ejs', { currentIdx: 2, title: 'My Profile', user: data.user, agent: data.agents[0]});
});

apiRouter.get('/profile-edit', function (req, res, next) {
    res.render('users/agent/profile-edit.ejs', { currentIdx: 2, title: 'Edit Your Profile', user: data.user, agent: data.agents[0]});
});


apiRouter.get('/payments', function (req, res, next) {
    res.render('users/agent/payments.ejs', { currentIdx: 3, title: 'Payments', user: data.user, payments: data.payments, projects: data.projects });
});

apiRouter.get('/settings/account', function (req, res, next) {
    res.render('users/agent/settings/account.ejs', { currentIdx: 5, title: 'Settings | Account', user: data.user });
});

apiRouter.get('/projects/list', function (req, res, next) {
    res.render('users/agent/project/list-projects.ejs', { currentIdx: 1, title: 'My Projects', user: data.user, projects: data.projects });
});

apiRouter.get('/project/:id', function (req, res, next) {
    var project = data.projects.filter(function(prj) { return prj.id == req.params.id; })[0];
    res.render('users/agent/project/projectview.ejs', { currentIdx: 1, title: project.title, user: data.user, project: project });
});

apiRouter.get('/calls-summary ', function (req, res, next) {
    res.render('users/agent/call-summary.ejs', { currentIdx: 1, title: 'Submit Call Summary', user: data.user });
});

apiRouter.get('/chat', function (req, res, next) {
    res.render('users/agent/chat.ejs', { currentIdx: 10, title: 'Chat Room', user: data.user, projects: data.projects });
});

apiRouter.get('/notifications', function (req, res, next) {
    res.render('users/agent/notifications.ejs', { currentIdx: 10, title: 'Notifications', user: data.user });
});



module.exports = apiRouter;