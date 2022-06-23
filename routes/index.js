var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//direct to the projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
//to go the about page 
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
//direct to the contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});
module.exports = router;
