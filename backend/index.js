const express=require('express')
var cors = require('cors')
const App=express()
const Mongoose=require('mongoose')
const userRoute=require('./routes/user')

App.use(cors())
App.use(express.json())

App.use('/',userRoute)




//Mongoose.connect("mongodbwrong://ankeet:<>@cluster0.rmpmo.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log('MongoDB connected')
//})

App.listen(3002,()=>{
console.log("Server running on port 3002")
})