const { ctrlWrapper } = require("../helpers");

const { Order } = require("../models");

const createOrder = async (req, res) => {
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

module.exports = {
  createOrder: ctrlWrapper(createOrder),
};
