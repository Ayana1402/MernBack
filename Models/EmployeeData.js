const mongoose = require('mongoose')
const empSchema = mongoose.Schema({
    Name: String,
    Designation: String,
    Salary: String,
    Location: String
})

const EmployeeData = mongoose.model('employeedatas',empSchema)
module.exports = EmployeeData