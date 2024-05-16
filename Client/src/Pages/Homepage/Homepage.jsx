//Homepage.jsx
import './Homepage.css'
import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Promo from '../../Components/Promo/Promo'
import Services from '../../Components/Services/Services'
import Footer from '../../Components/Footer/Footer'
import Brands from '../../Components/Brands/Brand'
import MostFeatures from '../../Components/MostFeatures/MostFeatures'
import PopularProducts from '../../Components/PopularProducts/PopularProduct'




export default function Homepage() {
  return (
    <>
    <div className='homepage'>
      <Banner />
      <Promo />
    </div>
    <Services />
    <MostFeatures/>
    <PopularProducts/>
    <Brands />
    <Footer/>
    </>
  )
}
