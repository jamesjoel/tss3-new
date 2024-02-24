require("../config/db")
const mongoose = require("mongoose")

let UserSchema = mongoose.Schema({
    fullname:String,
    email:String,
    contact:Number,
    gender:String,
    city:String
})

let User = mongoose.model("user",UserSchema)
module.exports = User