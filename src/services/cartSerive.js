const Cart = require('../models/Cart');
const Shoe = require('../models/Shoe'); // For include in getUserCart

exports.addToCart = async ({ userId, shoeId, quantity }) => {
  // Check if cart item already exists for this user and shoe
  let cartItem = await Cart.findOne({
    where: {
      userId,
      ShoeId: shoeId,
      status: "active"
    }
  });

  if (cartItem) {
    // If already in cart, update quantity
    cartItem.quantity += quantity;
    await cartItem.save();
    return cartItem;
  }

  // If not in cart, create new cart item
  return await Cart.create({
    userId,
    ShoeId: shoeId,
    quantity
  });
};

exports.getUserCart = async (userId) => {
  return await Cart.findAll({
    where: {
      userId,
      status: "active"
    },
    include: [
      {
        model: Shoe,
        attributes: ['id', 'name', 'price', 'image', 'stock']
      }
    ]
  });
};

exports.removeFromCart = async (id, userId) => {
  const cartItem = await Cart.findOne({
    where: { id, userId }
  });

  if (!cartItem) {
    return null;
  }

  cartItem.status = "inactive";
  await cartItem.save();
  return cartItem;
};
