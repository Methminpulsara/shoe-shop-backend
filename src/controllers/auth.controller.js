const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('../models/User');
require('dotenv').config();

exports.register = async (req, res) => {

    const {name,email,password,role} =req.body;

    const existing = await User.findOne({where :{email}});
    if(existing){
        return res.status(400).json({message: "User already exists"});
    }

    const hashed = await bcrypt.hash(password,10);
    const newUser = await User.create({
        name,
        email, 
        password:hashed, 
        role
    })

    res.status(201).json({message: "User registered successfully", user:newUser});
}

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({ message: "Invalid email or password" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign( // ✅ fix spelling here
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token }); // You can also send user info if needed
};

