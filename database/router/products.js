const router= require("express").Router()
const models=require('../models/products.js')
router.post('/',models.createProduct)
router.get('/',models.getallproducts)
module.exports.router=router