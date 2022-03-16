import React from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';

function HeroSlider() {
    const images=[
        {
            id:1,
            image:"../images/pexels-andy-vu-3244513.jpg"
        },
        {
            id:2,
            image:"../images/pexels-disha-sheta-3112898.jpg"
        },
        {
            id:3,
            image:"../images/pexels-efdal-yildiz-917494.jpg"
        },
        {
            id:4,
            image:"../images/pexels-francesco-ungaro-1671324.jpg"
        },
        {
            id:5,
            image:"../images/pexels-roberto-nickson-2559941.jpg"
        }
    ]    
  return (
      <>
    {/* <div>HeroSlider</div> */}
    <Wrap>
    <Splide options={{type:'loop',perPage:1,autoplay:false,transition:'slide'}}>
        {images.map((imag)=>(
            <SplideSlide key={imag.id}>                
            <img style={image} src={imag.image} alt="img"/>            
        </SplideSlide>
        ))}               
    </Splide>    
    </Wrap>
    </>
  )
}
const image={
    height:"100vh",
    width:"100%",
    objectFit:"cover"
}
const Wrap=styled.div`
        max-height:100%;
        max-width:100%;
        margin:auto;
`

export default HeroSlider