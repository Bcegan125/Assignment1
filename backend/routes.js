const selectionController = require('./controllers/selection-controller');
const express = require('express');
const orderController = require('./controllers/order-controller');
const userController = require('./controllers/user-controller');
const checkAuth = require('./middleware/check-auth');
const router = express.Router();

// routes to be added here
router.get('/', selectionController.getSelection);
router.post('/checkout', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
router.get('/users/:uid', userController.getUserById);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/orders/:uid', orderController.getOrdersByUserId);
router.put('/updateuser/:uid', userController.updateUser);
router.delete('/deleteuser/:uid', userController.deleteUser);
router.use(checkAuth);


module.exports = router;
