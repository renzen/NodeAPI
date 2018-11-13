var express = require('express');
var router = express.Router();

var auth_cntlr = require('../controllers/authentication.controller');
var user_cntlr = require('../controllers/user.controller');
var cust_cntlr = require('../controllers/customer.controller');
var order_cntlr = require('../controllers/order.controller');
var brand_cntlr = require('../controllers/brand.controller');
var category_cntlr = require('../controllers/category.controller');
var product_cntlr = require('../controllers/product.controller');

// Auth
router.post('/Auth/Authenticate', auth_cntlr.authenticate);
router.post('/Auth/ResetToken', auth_cntlr.resetToken);
// User
router.get('/User/GetUser', user_cntlr.getUser);
router.post('/User/AddUser', user_cntlr.addNewUser);
router.post('/User/UpdateUser', user_cntlr.updateUser);
router.post('/User/UpdateUserStatus', user_cntlr.updateUserStatus);
// Customer
router.get('/Customer/GetCustomer', cust_cntlr.getCustomer);
router.post('/Customer/AddCustomer', cust_cntlr.addNewCustomer);
router.post('/Customer/UpdateCustomer', cust_cntlr.updateCustomer);
router.post('/Customer/UpdateCustomerStatus', cust_cntlr.updateCustomerStatus);
// Order
router.get('/Order/GetOrder', order_cntlr.getOrder);
router.post('/Order/AddOrder', order_cntlr.addNewOrder);
router.post('/Order/UpdateOrder', order_cntlr.updateOrder);
router.post('/Order/UpdateOrderStatus', order_cntlr.updateOrderStatus);
// Brand
router.get('/Brand/GetBrand', brand_cntlr.getBrand);
router.post('/Brand/AddBrand', brand_cntlr.addNewBrand);
router.post('/Brand/UpdateBrand', brand_cntlr.updateBrand);
router.post('/Brand/UpdateBrandStatus', brand_cntlr.updateBrandStatus);
router.post('/Brand/GetBrandbyId', brand_cntlr.getBrandbyId);
// Category
router.get('/Category/GetCategory', category_cntlr.getCategory);
router.post('/Category/AddCategory', category_cntlr.addNewCategory);
router.post('/Category/UpdateCategory', category_cntlr.updateCategory);
router.post('/Category/UpdateCategoryStatus', category_cntlr.updateCategoryStatus);
// Product
router.get('/Product/AddProduct', product_cntlr.getProduct);
router.post('/Product/AddProduct', product_cntlr.addNewProduct);
router.post('/Product/UpdateProduct', product_cntlr.updateProduct);
router.post('/Product/UpdateProductStatus', product_cntlr.updateProductStatus);

module.exports = router; 