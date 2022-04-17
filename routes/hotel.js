var express = require('express');
const hotel_controlers= require('../controllers/hotel');
var router = express.Router();

/* GET home page. */
router.get('/', hotel_controlers.hotel_view_all_Page );

router.get('/detail', hotel_controlers.hotel_view_one_Page);

module.exports = router;
