const mongoose = require("mongoose")
const hotelSchema = mongoose.Schema({
Hotel_name:{
    type: String,
    minLength: 4,
    maxLength:10
} ,
Location: String,
price: {
    type: Number,
    min: 10,
    max: 500}
})
module.exports = mongoose.model("hotel", hotelSchema)