const express = require("express");
const {
    getProducts,
    getProductsUser,
    getProductsPriceController,
    getCategory,
    getProductsLimit,
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/products", getProducts);
router.get("/productsPrice", getProductsPriceController);
router.post("/productsCategory", getCategory);
router.post("/productsLimit", getProductsLimit);
router.get("/productsUser", getProductsUser);

module.exports = router;