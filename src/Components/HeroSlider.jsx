import React from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';

function HeroSlider() {
    const images=[
        {
            id:1,
            image:"../images/art-rachen-sM4r-swmcoY-unsplash.jpg"
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
            <SplideSlide key={imag.id} >                
            {/* <img style={image} src={imag.image} className="backdrop-blur-xl" alt="img"/>   */}                                
            {/* {(()=>{
                if (imag.id) {
                    console.log(imag.id);
                }
            })} */}
            <Hero className='font-montserrat text-white' style={image}>
                <div className='h-[100vh] d-flex flex-column justify-center items-center gap-5 backdrop-blur-[5px]'>
                    <h1 className='text-3xl text-gray-300 font-thin md:text-6xl'>Explore the future with <div className='text-center font-bold text-white pt-md-4'>CryptoBazaar .</div></h1>
                    <p className='text-center w-3/5 py-md-4 text-gray-400 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt molestiae provident? Repellat, iusto asperiores debitis esse quis natus nostrum.</p>
                    <button className='py-md-3 px-md-5 rounded-md text-black tracking-wider bg-gradient-to-r from-[#74ebd5] to-[#ACB6E5]'>Explore now</button>
                </div>
            </Hero>                                   
        </SplideSlide>
        ))}               
    </Splide>    
    </Wrap>
    </>
  )
}
const image={
    // height:"100vh",
    // width:"100%",
    // objectFit:"cover"
    background:"Linear-gradient(to bottom ,rgba(0,0,0,.5),rgb(0,0,0)) ,url('../images/art-rachen-sM4r-swmcoY-unsplash.jpg')",
    backgroundSize:"cover",    

}
const Hero=styled.div`
        // max-height:100%;
        // max-width:100%;
        // margin:auto;
`
const Wrap=styled.div`
        max-height:100%;
        max-width:100%;
        margin:auto;
`

export default HeroSlider