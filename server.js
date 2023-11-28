require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./dbConn');
 
connectDB();


// mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology : true, useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
const EmployeesRouter = require('./routes/employeeRoute.js')

app.use('/subscribers', subscribersRouter);
app.use('/employees',EmployeesRouter);

mongoose.connection.once('open',()=>{
    console.log('Connected to mongoDB');
    app.listen(3000, () => console.log('Server Started'))
})
