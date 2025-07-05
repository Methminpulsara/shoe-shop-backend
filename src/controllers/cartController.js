const cartService = require('../services/cartSerive');

exports.addToCart = async(req,res)=>{
    const {shoId,quintity}=  req.body;
    const userId = req.user.id;

    const cartItem = await cartService.addToCart(userId,shoId,quintity);
    res.json(cartItem);
}

