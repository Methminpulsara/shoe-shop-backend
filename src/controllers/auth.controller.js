
require('dotenv').config();
const authService = require('../services/auth.service')


exports.register = async (req , res ) => {

  try {
    const user = await authService.register(req.body);
    res.status(201)
              .json({message : "Registers" , user})

  } catch (err) {
    res.status(400).json({error: err.message})  
  }
};


exports.login = async (req , res ) => {
  try {
    const result = await authService.logingUser(req.body);
    res.json(result)
  } catch (err) {
    res.status(400).json({error: err.message})  
  }
};


