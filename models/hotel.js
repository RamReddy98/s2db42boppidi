const mongoose = require("mongoose")
const hotelSchema = mongoose.Schema({
Hotel_name:{
    type: String,
    minLength: 4,
    maxLength:15
} ,
Location: String,
price: {
    type: Number,
    min: 10,
    max: 300}
})
module.exports = mongoose.model("hotel", hotelSchema)