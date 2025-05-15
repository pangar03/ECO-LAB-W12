const { getAllOrders } = require("../db/orders.db");

const getOrders = async (req, res) => {
    const response = await getAllOrders();
    res.send(response);
};

module.exports = {
    getOrders,
};