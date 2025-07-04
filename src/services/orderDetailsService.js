const orderDetail = require('../models/OrderDetail')


exports.create = async (data) => {
    return await orderDetail.create(data);
}

exports.getAll= async()=>{
    return await orderDetail.findAll();
}

exports.getById= async(id)=>{
    return await orderDetail.findByPk(id);
}

exports.update= async(id,data)=>{
    const updated = await orderDetail.findByPk(id);
    return await updated.update(data);
}

exports.remove= async(id)=>{
    const detail = await orderDetail.findByPk(id);
    return await detail.destroy();
}

