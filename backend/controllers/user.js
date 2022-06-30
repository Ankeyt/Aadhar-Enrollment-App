const User=require('../models/user')
const Aadhar=require('../models/aadhar')
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

exports.createUser=async(req,res)=>{
    try {

     console.log(req.body)  
     const { firstName,lastName, email, phone, password,address } = req.body;
     const saltRounds = 10;
     const result = await User.findOne({email:email});
     //console.log("search",result)
     if (result) {
       
       return res.json({ msg: "User Already there!!" });
     }
   
     const hashedPassword = await bcrypt.hash(password, saltRounds);
     const createUser = await User.create({
        fname:firstName,
        lname:lastName,
        phone:phone, 
        email:email,
        address:address,
        password:hashedPassword,
      });
      console.log("createuser",createUser)
        const x=Math.floor(100000 + Math.random() * 900000);//six digit
        let uid=''
        uid=uid+x+x;
        //console.log(uid)
        const createAadhar=await Aadhar.create({
         
          uid:uid,
          userid:createUser._id
        })
      
      
      console.log("creataadhar",createAadhar)

      return res.status(200).json({
        msg:"User registered",
        user:createUser,
        aadhar:createAadhar
    })
    
    } catch (error) {
        console.log(error)
    }
}

exports.loginUser=async(req,res)=>{
    try {
        //console.log(req.body)
        const {email,password}=req.body 
        const userdata=await User.findOne({email:email})
        console.log("data",userdata)
        const {fname,lname,phone,address}=userdata
        const password2=userdata.password
        const boo=await bcrypt.compare(password,password2)
        if (boo==true) {

          console.log("It matches! login successfull")
          const token=jwt.sign({ email:email }, 'itwillgeneratetokenmaybeaBearerone');
          const search=await Aadhar.findOne({userid:userdata._id})
          console.log("search",search)
          //console.log(token)
          return res.status(200).json({
            fname:fname,
            lname:lname,
            phone:phone,
            add:address,
            token:token,
            aadhar:search.uid,
            msg:'login successfull' 
          })

        }
        else {
          console.log("Invalid password!");
          console.log(err)
          return res.json({msg:"user not found and Invalid password!"})
        }

    } catch (err) {
        console.log(err)
    }
}