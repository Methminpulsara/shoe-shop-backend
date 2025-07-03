const shoeService = require('../services/shoeService')


exports.create = async (req , res)=>{
    const shoe = await shoeService.create(req.body);
    res.status(200).json(shoe);
}
exports.getAll = async (req, res)=>{
    const shoes = await shoeService.getAll();
    res.status(200).json(shoes);
}

exports.getById = async (req, res)=>{
    const shoe = await shoeService.getById(req.params.id)
    res.json(shoe);
} 
exports.update = async (req, res)=>{
    const updated = await shoeService.update(req.params.id, req.body);
    res.json(updated);
} 
exports.remove = async (req,res)=>{
    await shoeService.remove(req,params.id)
    res.json({ message: "Shoe deleted" });
} 
