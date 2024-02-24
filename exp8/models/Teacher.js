require("../config/db");
const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    gender : String,
    address : String,
    city : String
})

const Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;