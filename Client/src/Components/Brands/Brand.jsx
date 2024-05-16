//Brand.jsx



import React from 'react'
import Marquee from "react-fast-marquee";
import './Brand.css'

const fakeBrandsdata =[
    {
        id: 1,
        image: '/images/Bmwlogo.jpeg'
    },
    {
        id: 2,
        image: '/images/ducatilogo.png'
    },
    {
        id: 3,
        image: '/images/ktmlogo.jpg'
    },
    {
        id: 4,
        image: '/images/yamahalogo.png'
    },
    {
        id: 5,
        image: '/images/Royal_Enfield_Logo.png'
    },
    {
        id: 6,
        image: '/images/java.jpeg'
    }
]

export default function Brand() {
  return (
    <div className='brands-container'>
      <Marquee>
        {fakeBrandsdata.map((Brand) =>{
            return(
                <img src={Brand.image} key={Brand.id}
                className='marquee-image' alt='brand-image' />
            )
        })}
      </Marquee>
    </div>
  )
}
