//productRoutes.js

const express = require('express')
const { CreateProduct, getAllProducts, singleProduct } = require('../controllers/productCtrl')


const router =express.Router()

router.post('/create',CreateProduct)
router.get('/all',getAllProducts)
router.get('/single/:id',singleProduct)

module.exports=router