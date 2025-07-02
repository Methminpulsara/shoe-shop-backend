const Jwt = require("jsonwebtoken");
require("dotenv").config();

exports.protect = (req, res, next) =>{
  const token = req.headers.authorization?.split(' ')[1];
 
  if(!token){
    return res.status(401).json({ message: "You are not authenticated!" });
  }

  try{
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch(err){
    return res.status(401).json({ message: "You are not authenticated!" });
  }
};

exports.adminOnly = (req , res , next ) =>{
    if(req.user.role !== 'admin'){
      return res.status(401).json({ message: "Admin Only" });
    }
    next();
}

