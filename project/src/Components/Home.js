import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from './Slider'
import Shopslider from './Shopslider'
import Banner from './Banner'
import Productslider from './Productslider'
import Banner2 from './Banner2'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <Slider/>
        <Shopslider/>
        <Banner/>
        {/* <Productslider/> */}
        <Banner2/>
        <Footer/>

    </div>
  )
}
