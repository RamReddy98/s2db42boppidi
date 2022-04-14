
var express = require('express'); 
var router = express.Router(); 

// Require controller modules. 
var api_controller = require('../controllers/api'); 
var hotel_controller = require('../controllers/hotel'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// hotel ROUTES /// 
 
// POST request for creating a hotel.  
router.post('/hotel', hotel_controller.hotel_create_post); 
 
// DELETE request to delete hotel. 
router.delete('/hotel/:id', hotel_controller.hotel_delete); 
 
// PUT request to update hotel. 
router.put('/hotel/:id', hotel_controller.hotel_update_put); 
 
// GET request for one hotel. 
router.get('/hotel/:id', hotel_controller.hotel_detail); 
 
// GET request for list of all hotel items. 
router.get('/hotel', hotel_controller.hotel_list); 
 
module.exports = router; 