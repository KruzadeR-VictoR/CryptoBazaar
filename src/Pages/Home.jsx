import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSlider from '../Components/HeroSlider'
import CoinHome from '../Components/CoinHome'
import News from '../Components/News'
import FooterHome from '../Components/FooterHome'

function Home() {
  return ( <>    
  <div>Home</div>           
    <Navbar/> 
    <HeroSlider/> 
    <CoinHome/>   
    <News/>
    <FooterHome/>       
    </>
  )
}


export default Home