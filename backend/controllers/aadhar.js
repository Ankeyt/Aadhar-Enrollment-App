const Aadhar=require('../models/aadhar')

exports.getAadhar=async (req,res)=>{
    const id=req.params.uid 
    console.log(req.params)
    console.log(id)
    const reqq= await Aadhar
    .findOne({uid:id})
    .populate("userid")

    console.log("find pop",reqq)

    return res.json({
        uid:id,
        name:reqq.userid.fname+" "+reqq.userid.lname,
        phone:reqq.userid.phone,
        address:reqq.userid.address,
        
    })

}