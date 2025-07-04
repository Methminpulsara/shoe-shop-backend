const orderDetailService = require("../services/orderDetailsService");


exports.create = async (req, res)=> {
    const detail = await orderDetailService.create(req.body);
    res.status(201).json(detail);
}

exports.getAll = async(req,res)=>{
    const details = await orderDetailService.getAll();
    res.json(details);
}


