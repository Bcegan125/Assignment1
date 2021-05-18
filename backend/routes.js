const selectionController = require('./controllers/selection-controller');
const express = require('express');
const orderController = require('./controllers/order-controller');

const router = express.Router();

// routes to be added here
router.get('/', selectionController.getSelection);
router.post('/checkout', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);

module.exports = router;
