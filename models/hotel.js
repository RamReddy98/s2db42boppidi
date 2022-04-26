const mongoose = require("mongoose")
const hotelSchema = mongoose.Schema({
    Hotel_name: String,
    Location: String,
    price: Number
})
module.exports = mongoose.model("hotel", hotelSchema)  