var express = require('express');
var router = express.Router();
var User = require('../schema/User');
/* GET home page. */
router.get('/', function(req, res, next) {
  User.find(function(err,users){
    res.render('home', {
      user:users,
      context:'home'
    });
  })


});

module.exports = router;
