
const router=require('express').Router ();
const ProductRouters=require('./products.routers')
router.use('/products',ProductRouters)
module.exports=router;
