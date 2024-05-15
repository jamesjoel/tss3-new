require("../config/db");
const mongoose = require("mongoose");

const AlbumSchema = mongoose.Schema({
    image : String,
    userid : mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("album", AlbumSchema)