const bcrypt = require("bcryptjs");
const Jwt = require ('jsonwebtoken');
const User = require("../models/User");
require ('dotenv').config();

exports.register = async ({name, email, password , role })=>{
    const existing = await User.findOne({where : {email}});
    if(existing){
        throw new Error('User already exists');
    }
   
    const hashed = await bcrypt.hash(password, 10);
    const newUesr = await User.create({ name, email, password: hashed, role });
    return newUesr;
}

exports.logingUser = async({ email, password }) =>{
    const user = await User.findOne({where : {email}});
    if(!user){
        throw new Error ('Invalid email or password');
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw new Error ('Invalid email or password');
    }
    const token = Jwt.sign({id:user.id, role :user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
    return {token};
}
