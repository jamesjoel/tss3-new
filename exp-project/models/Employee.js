require("../config/db");

const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
    fullname : String,
    salary : Number,
    gender : String,
    post : String,
    city : String
})

const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;