//ProductDetails.jsx



import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const getSingleProduct = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/api/v1/single/${id}`)
            setProduct(respnse.data.data)
        }catch (error) {
             console.log(error)
        }
        
    }
    useEffect(()=>{
        getSingleProduct()
    },[id])

    const AddToCart = async() =>{
        const response = await axios.post('http://localhost:3000/api/v1/addtocart',{
            productId : id,
            quantity:1
        },{
            withCredentials: true
        })
        if (response.status === 200){
            navigate('/cart')
        }
    }

  return (
    <div>
        <h1 className='heading-tags'>Product Details</h1>
        <div className="productDetails-container">
            <div>
                <img className='product-details-images' src={product.img} alt="product-images" />
            </div>
            <div>
                <h1 className="names">{product.productName}</h1>
                <h2 className="names">{product.price}</h2>
                <button className="cart" onClick={AddToCart}>Add to cart</button>
            </div>
        </div>
      
    </div>
  )
}

export default ProductDetails
