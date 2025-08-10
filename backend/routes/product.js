const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

router.get(
  "/",
  wrapAsync(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return next(new ExpressError(404, "Product not found"));
    }
    res.json(product);
  })
);

module.exports = router;
