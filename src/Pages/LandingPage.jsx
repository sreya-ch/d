import React from 'react'
import Navbar1 from '../components/Navbar'
import Carousel from '../components/Courasel'
import WhoYouAre from '../components/whoYouAre'
import OurSolution from '../components/OurSolution'
import Products from '../components/Products'


const LandingPage = () => {
  return (
    <div>
        <Navbar1/>
        <Carousel/>
        <WhoYouAre/>
        <OurSolution/>
        <Products/>
    </div>
  )
}

export default LandingPage
