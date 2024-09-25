const express=require('express');
const homeRouter=express.Router();
const info=require("../model/userDetails");
const tokenAuthenticator=require("../middleware/tokenAuthentication");
const homePage=async (req,res)=>{
    try{
        const {userName}=req.user;
        const Info = await info.findOne({name:userName});
        if(!Info){
            console.log(" 404 user data not found info:",Info);
          return  res.status(404).json({code:0,msg:"user data not found"});
        }
       return res.status(201).json(
            {
                code:1,
                message: "Successfully retrieved data",
                Data: {
                  name: Info.name,
                  rollNo: Info.rollNo,
                  phoneNo: Info.phoneNo,
                  roomNo: Info.roomNo,
                  hostel: Info.hostel,
                  email: Info.email,
                },
                userType: Info.userType

            }
        )
    }catch(error){
        console.log("Internel server error",error);
       return res.status(500).json({code:-1,msg:"Internel server errpr"});
    }
   
     
}
homeRouter.get("/",tokenAuthenticator,homePage);
module.exports=homeRouter;