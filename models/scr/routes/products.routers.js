const express=require('express');
const router=express.Router();
const ProductController=require('../controller/')


router.get('/',ProductController.getProducts);
router.get('/:id', ProductController.getProductsById);
router.patch('/:productId',ProductController.updareProduct);
router.post('/',ProductController.createProduct)
router.delete('/:productId', ProductController.deleteProduct);

module.exports=router