const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    employeeName   : {type : String},
    employeeAge    : {type : Number},
    employeeRole   : {type : String},
    employeeSalary : {type : Number},
    createdDate    : {type : Date , default : Date.now}    
})

module.exports = mongoose.model('employeeModel', EmployeeSchema);