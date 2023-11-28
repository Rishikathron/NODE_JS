const express = require('express')
const router = express.Router();
const employeeModel = require('../models/employee.js')


router.get('/',async (req,res)=>{
    console.log("inside employee get");
    try{
        const employees = await employeeModel.find().exec();        
        res.send(employees);
    }
    catch(err){ res.status(500).json({ message: err.message }) }
})

router.post('/',async (req,res)=>{
    console.log("inside employee post");
    try{
        const employee = new employeeModel({
            employeeName : req.body.employeeName,
            employeeAge : req.body.employeeAge,
            employeeSalary : req.body.employeeSalary,
            employeeRole : req.body.employeeRole
           });
           console.log("inside employee 1");
           const newEmployee = await employee.save();
           console.log("inside employee 2");
        //employeeModel.insertOne(newEmployee);
        res.status(200).json("Employee Created "+newEmployee)
    }
    catch(err){ res.status(500).json({ message: err.message }) }
})

router.get('/id:', async (req,res) =>{
    console.log("inside get with id");
    try{
        const employee = await employeeModel.findOne({_id : req.query.id}).exec()
        console.log(employee);
        res.send(employee);
    }
    catch(err){ res.status(500).json({ message: err.message }) }
})

router.put('/', async (req,res) =>{
    console.log("inside get with id");
    try{
        const employee = await employeeModel.findOne({_id : req.body.id}).exec()
        console.log(employee);
        res.send(employee);
    }
    catch(err){ res.status(500).json({ message: err.message }) }
})

router.delete('/', async (req,res) =>{
    console.log("inside delete with id");
    try{
        const employee = await employeeModel.findOne({ employeeName : req.query.name});
        if(!employee){
            res.status(400).send("Data not found")
        }
        const result = employee.deleteOne({ employeeName : req.query.name});
        console.log(employee);
        res.send(employee);
    }
    catch(err){ res.status(500).json({ message: err.message }) }
})

module.exports = router;