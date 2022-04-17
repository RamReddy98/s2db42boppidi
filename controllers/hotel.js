var hotel = require('../models/hotel'); 

// List of all Hotels
exports.hotel_list = async function(req, res) {
    try{
    thehotels = await hotel.find();
    res.send(thehotels);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// for a specific Hotel.
exports.hotel_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await hotel.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.hotel_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await hotel.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle Hotel update form on PUT. 
exports.hotel_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await hotel.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Hotel_name)  
               toUpdate.Hotel_name = req.body.Hotel_name; 
        if(req.body.Location) toUpdate.Location = req.body.Location; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
};

// VIEWS
// Handle a show all view
exports.hotel_view_all_Page = async function(req, res) {
    try{
    thehotels = await hotel.find();
    res.render('hotel', { title: 'hotel Search Results', results: thehotels });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}; 

// Handle a show one view with id specified by query
exports.hotel_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await hotel.findById( req.query.id)
    res.render('hoteldetail',
    { title: 'hotel Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };