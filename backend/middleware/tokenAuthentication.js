const jwt=require('jsonwebtoken');
const login=require('../model/logins');

const authenticator = async (req,res,next)=>{
    try{
        const token =req.cookies.token || req.headers.authorization?.split(' ')[1];
        if(!token){
            console.log("token didnt got fetched token:",token);
            return res.status(401).json({code:0,msg:"token didnt recieved"});
        }
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        if(!decoded){
           return res.status(401).json({code:0,msg:"Invalid token"});
        }
        const user = await login.findOne({userName:decoded.userName});
        if (!user) {
            return res.status(401).json({ code: 0, message: "Authentication failed" });
          }
        console.log("user is verified  ",user);
        req.user=decoded;
        next();
    }catch(error){
        console.log("error in authenticator",error);
        return res.status(401).json({code:0,msg:"token authenticator error"});
    }
}
module.exports=authenticator;