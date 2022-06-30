const express = require('express')
const app=express.Router()
const UserController=require('../controllers/user')
const getAadhar=require('../controllers/aadhar')

app.post("/",UserController.createUser)
app.post("/login",UserController.loginUser)
app.get('/:uid',getAadhar.getAadhar)




module.exports=app;