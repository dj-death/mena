'use strict';

var express = require('express');
var apiRouter = express.Router();

/**********     Routes for rendering templates Website   **********/
apiRouter.get('/', function (req, res, next) {
    res.render('website/home.ejs', { title: 'Welcome to SalesFort', currentIdx: 0 });
});

apiRouter.get('/solutions', function (req, res, next) {
    res.render('website/solutions.ejs', { title: 'Solutions & Use Cases',  currentIdx: 1 });
});

apiRouter.get('/saas', function (req, res, next) {
    res.render('website/saas.ejs', { title: 'SaaS Integrations', currentIdx: 2});
});


apiRouter.get('/pricing', function (req, res, next) {
    res.render('website/pricing.ejs', { title: 'Pricing',  currentIdx: 3 });
});


//apiRouter.get('/emailverify/registration', iAuth.activateRegistrationEmail);


apiRouter.get('/reset-password', function (req, res, next) {
    res.render('website/forgotpassword/forgotpassword.ejs', { currentIdx: -1, title: 'Reset Password' });
});

//apiRouter.get('/emailverify/changepassword', iAuth.forgotPasswordStep2);

apiRouter.get('/contact', function (req, res, next) {
    res.render('website/company/contact.ejs', { currentIdx: -1, title: 'Contact Us' });
});


apiRouter.get('/about', function (req, res, next) {
    res.render('website/company/about.ejs', { currentIdx: -1, title: 'About Us' });
});


apiRouter.get('/getting-started', function (req, res, next) {
    res.render('website/company/getting-started.ejs', { currentIdx: -1, title: 'Getting Started' });
});


apiRouter.get('/faq', function (req, res, next) {
    res.render('website/company/faq.ejs', { currentIdx: -1, title: 'FAQs' });
});


apiRouter.get('/support', function (req, res, next) {
    res.render('website/company/support.ejs', { currentIdx: -1, title: 'Support Center' });
});


apiRouter.get('/careers', function (req, res, next) {
    res.render('website/company/careers.ejs', { currentIdx: -1, title: 'Careers' });
});


apiRouter.get('/legal', function (req, res, next) {
    res.render('website/company/legal.ejs', { currentIdx: -1, title: 'Terms and Conditions' });
});

apiRouter.get('/media', function (req, res, next) {
    res.render('website/company/media.ejs', { currentIdx: -1, title: 'Media Relations' });
});


apiRouter.get('/login', function (req, res, next) {
    res.render('website/login.ejs', { title: 'Log in to SalesFort', currentIdx: 4 });
});


module.exports = apiRouter;