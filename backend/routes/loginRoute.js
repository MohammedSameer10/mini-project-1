const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const loginRouter=express.Router();
const login=require('../model/logins')
const loginUser=async (req,res)=>{
    try{
        const{userName,password}=req.body;
        if(!(userName&&password)){
            console.log("enter every field");
           return res.status(400).json({code:"0",msg:"validation error"});
        }
      const user= await login.findOne({userName});
      if(!user){
        console.log("user not exist");
       return res.status(400).json({code:0,msg:"user didnt exist"});
      }
      if(!bcrypt.compare(password,user.password)){
       return res.status(400).json({code:0,msg:"invalid password u fool"});
      }
      const token = jwt.sign(
        {userName:user.userName},
        process.env.SECRET_KEY,
        {expiresIn:"15m"}
      );
      console.log("user signed in token created succesfully token:",token);
      const option={
        expires:new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        httpOnly:true,
      }
      user.password=undefined;
      user.token=token;
      return res.status(201).cookie("token",token,option).json({code:1,msg:"User Signed in succesfully",user})
      
    }catch(error){
       console.log("hi from error",error);
      return res.status(500).json({code:-1,msg:"Internel server error"});
    }
} 
loginRouter.post('/',loginUser);
module.exports=loginRouter;
