const Shoe = require("../models/Shoe");

exports.create = async (data)=>{
    return await Shoe.create(data);
}

exports.getAll = async () =>{
    return await Shoe.findAll();
}

exports.getById = async (id)=>{
    return await Shoe.findByPk(id);
}

exports.update = async (id, data)=>{
   const shoe = await Shoe.findByPk(id);
   return await shoe.update(data);
}

exports.remove = async (id)=>{
    const shoe = await Shoe.findByPk(id);
    return await shoe.destroy();
}

