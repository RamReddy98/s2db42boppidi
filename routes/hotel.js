var express = require('express');
const hotel_controlers= require('../controllers/hotel');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET home page. */
router.get('/', hotel_controlers.hotel_view_all_Page );

router.get('/detail', hotel_controlers.hotel_view_one_Page);
router.get('/create', hotel_controlers.hotel_create_Page); 
router.get('/update',secured, hotel_controlers.hotel_update_Page);
router.get('/delete', hotel_controlers.hotel_delete_Page); 



module.exports = router;
