require("../config/db")
const mongoose = require("mongoose");
const SliderSchema = mongoose.Schema({
    name : String,
    status : {default : 1, type : Number}
})

module.exports = mongoose.model("slider", SliderSchema);