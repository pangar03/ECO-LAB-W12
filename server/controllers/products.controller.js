const { getAllProducts, getProductsCurrentUser, getProductsPrice, getProductsCategory, getProductsByRange } = require('../db/products.db');

const getProducts = async (req, res) => {
    const products = await getAllProducts();
    res.send(products);
};

const getProductsUser = async (req, res) => {
    const products = await getProductsCurrentUser();
    res.send(products);
};

const getProductsPriceController = async (req, res) => {
    const products = await getProductsPrice();
    res.send(products);
}

const getCategory = async (req, res) => {
    const { category } = req.body;
    const response = await getProductsCategory(category);
    res.send(response);
}

const getProductsLimit = async (req, res) => {
    const  {rangeStart, rangeEnd} = req.body;
    const products = await getProductsByRange(rangeStart, rangeEnd);
    res.send(products);
}


module.exports = {
    getProducts,
    getProductsUser,
    getProductsPriceController,
    getCategory,
    getProductsLimit,
};
