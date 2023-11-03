const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/productos', productoController.createProduct);
router.get('/productos', productoController.getAllProducts);
router.put('/productos/:id', productoController.updateProduct);
router.delete('/productos/:id', productoController.deleteProduct);

module.exports = router;
