const mongoose=require('mongoose')

const aadharSchema=new mongoose.Schema({
   
    uid:{
        type: String,
        unique: true,
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


})

module.exports=mongoose.model("aadhar",aadharSchema)