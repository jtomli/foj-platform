var express = require('express');
var router = express.Router();
//var models = require('../models');
//var User = models.User;

//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

router.get('/', function(req, res, next) {
  res.render('welcome');
});

router.get('/admin', function(req, res) {
  res.render('admin-login');
});

// router.get('/findId', function(req, res) {
//   res.render('find-id');
// });

router.get('/clockIn', function(req, res) {
  // TODO find user in DB
  var id = req.query.userId;
  res.render('clocking', {name: "Jamie", roles: ["Stocker", "Shopper", "Driver"], clock: "In", in: true})
});

router.get('/clockOut', function(req, res) {
  // TODO find user in DB
  res.render('clocking', {name: "Jamie", clock: "Out"});
});

router.get('/viewProfile', function(req, res) {
  var id = req.query.userId;
  // TODO find id
  var volunteer = {
    fname: "Jamie",
    lname: "Tomlinson",
    address: "4038 Locust St",
    city: "Philadelphia",
    state: "PA",
    zip: 19104,
    email: "jtomli@seas.upenn.edu",
    phone: "215-307-7691",
    languages: "English (fluent)",
    dob: "09/11/1997",
  };
  res.render('viewProfile', {volunteer, id: 1234});
});

router.get('/editProfile', function(req, res) {
  var id = req.query.userId;
  // TODO
  var volunteer = {
    fname: "Jamie",
    lname: "Tomlinson",
    address: "4038 Locust St",
    city: "Philadelphia",
    state: "PA",
    zip: 19104,
    email: "jtomli@seas.upenn.edu",
    phone: "215-307-7691",
    languages: [{language: "English", fluent: true}],
    dob: "09/11/1997"
  };
  res.render('editProfile', {volunteer, id: 1234});
});

router.post('/editProfile', function(req, res) {
  res.send(req.body);
});

router.post('/confirm', function(req, res) {
  var role = req.body.role;
  // TODO send data to DB
  res.render('confirm', {name: "Jamie", clock: req.query.clock});
});



///////////////////////////// END OF PUBLIC ROUTES /////////////////////////////

// router.use(function(req, res, next){
//   if (!req.user) {
//     res.redirect('/');
//   } else {
//     return next();
//   }
// });

//////////////////////////////// PRIVATE ROUTES ////////////////////////////////
// Only logged in users can see these routes

router.get('/protected', function(req, res, next) {
  res.render('protectedRoute', {
    username: req.user.username,
  });
});

///////////////////////////// END OF PRIVATE ROUTES /////////////////////////////

module.exports = router;
