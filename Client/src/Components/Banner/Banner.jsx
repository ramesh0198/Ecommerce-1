//Banner.jsx


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

import React from 'react'

export default function Banner() {
  return (
    <Carousel autoPlay showThumbs={false} interval={3000}infiniteLoop showStatus = {false} showIndicators={false}  >  
    <div className="banner-container">
        <img src="/images/model5.jpg" alt="banner" />
    </div>
    <div className="banner-container">
        <img src="/images/model2.jpg" alt="banner" />
    </div>
    <div className="banner-container">
        <img src="/images/model3.jpg" alt="banner" />
    </div>
    <div className="banner-container">
        <img src="/images/model4.jpg" alt="banner" />
    </div>

    </Carousel>
  )
}

