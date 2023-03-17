const router = require("express").Router();
const productController2 = require("../controllers/ProductController2");


router.get('/products', productController2.getProducts);
router.get('/products/:id', productController2.getProductById);
router.post('/products', productController2.saveProduct);
router.put('/products/:id', productController2.updateProduct);
router.delete('/products/:id', productController2.deleteProduct);

module.exports = router;
