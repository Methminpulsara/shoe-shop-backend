const Cart = require('../models/Cart')

exports.addToCart = async({userId, shoeId, quintiity})=>{
    let cartItem = await Cart.findOne({
        where:{
            userId,shoeId, status:"active"}
        });
    if(cartItem){
        cartItem.quintiity += quintiity;
        await cartItem.save();
        return cartItem;
    }
    
    return await Cart.create({
        userId,shoeId,quintiity
    })
}

exports.getUserCart = async(userId)=>{
    return await Cart.findAll({
        where:{
            userId, status:"active",
            include:["Shoe"]
        }
    })
}


exports.removeFromCart =async(id,userId)=>{
    const cartItem = await Cart.findOne({
        where:{id,userId}
    })

    if(!cartItem){
        return null
    }
    cartItem.status = "inactive";
    await cartItem.save();
    return cartItem;
}