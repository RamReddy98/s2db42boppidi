var hotel = require('../models/hotel'); 

// List of all Hotels
exports.hotel_list = function(req, res) {
    res.send('NOT IMPLEMENTED: hotel list');
};

// for a specific Hotel.
exports.hotel_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: hotel detail: ' + req.params.id);
};

// Handle Hotel create on POST.
exports.hotel_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new hotel(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Hotel_name":"Leela Palace", "Location":"Bangalore", "price":180} 
    document.Hotel_name = req.body.Hotel_name; 
    document.Location = req.body.Location; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle Hotel delete form on DELETE.
exports.hotel_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: hotel delete DELETE ' + req.params.id);
};

// Handle Hotel update form on PUT.
exports.hotel_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: hotel update PUT' + req.params.id);
};

// List of all Hotels
exports.hotel_list = async function(req, res) {
    try{
    thehotel = await hotel.find();
    res.send(thehotel);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};


// VIEWS
// Handle a show all view
exports.hotel_view_all_Page = async function(req, res) {
    try{
    thehotel = await hotel.find();
    res.render('hotel', { title: 'hotel Search Results', results: thehotel });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}; 