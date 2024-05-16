//PopularProduct.jsx



import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import axios from 'axios'
import './PopularProduct.css'


const PopularProduct = () => {
    const[products, setProducts]= useState([])

    const getAllProducts = async () =>{
        try {
            const response = await axios.get('http://localhost:3000/api/v1/all')
            console.log(response.data.data)
            setProducts(response.data.data)
          }  catch (error) {
             console.log(error)
            }
        
    }
    useEffect(() => {
        getAllProducts()
    }, [])
  return (

    <div>
        <h1 className='heading-tags'>Popular Product</h1>
        <div className="popularproducts">
            {products.map((product) => {
                return(
                    <ProductCard productid = {product._id} name={product.productName} img={product.img} price={product.price} key={product._id} />
                )
            })} 
        </div>
      
    </div>
  )
}

export default PopularProduct

