var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hotel', { title: 'Search Results by Hotel' });
});

module.exports = router;
