const cartService = require('../services/cartSerive');

exports.addToCart = async (req, res) => {
  const { shoeId, quantity } = req.body;
  const userId = req.user.id;

  const cartItem = await cartService.addToCart({ userId, shoeId, quantity });
  res.json(cartItem);
};

exports.getCart = async (req, res) => {
  const userId = req.user.id;
  const cart = await cartService.getUserCart(userId);
  res.json(cart);
};

exports.removeItem = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;

  const removed = await cartService.removeCartItem(id, userId);
  if (!removed) return res.status(404).json({ message: "Item not found" });

  res.json({ message: "Item removed" });
};
