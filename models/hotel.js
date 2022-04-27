const mongoose = require("mongoose")
const hotelSchema = mongoose.Schema({
    Hotel_name: String,
    Location: { type: String, minLength: 1 },
    price: { 
        type: Number,
        min: 10
    }
})
module.exports = mongoose.model("hotel", hotelSchema)  