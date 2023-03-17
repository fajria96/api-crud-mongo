const router = require("express").Router();
const productController = require("../controllers/ProductController");

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.saveProduct);
router.patch('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get("/products/search/:key", productController.filterList);

module.exports = router;
