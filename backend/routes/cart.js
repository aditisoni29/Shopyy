const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");

router.get(
  "/",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );
    if (!cart) {
      return res.json({ items: [] });
    }
    res.json(cart);
  })
);

router.post(
  "/add",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user._id;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity: quantity });
    }
    await cart.save();
    const populatedCart = await cart.populate("items.product");
    res.status(200).json(populatedCart);
  })
);

router.put(
  "/update/:productId",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found." });
    }
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      if (quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      } else {
        cart.items[itemIndex].quantity = quantity;
      }
      await cart.save();
      const populatedCart = await cart.populate("items.product");
      return res.status(200).json(populatedCart);
    } else {
      return res.status(404).json({ message: "Item not found in cart." });
    }
  })
);

router.delete(
  "/remove/:productId",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found." });
    }
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );
    await cart.save();
    const populatedCart = await cart.populate("items.product");
    res.status(200).json(populatedCart);
  })
);

module.exports = router;
