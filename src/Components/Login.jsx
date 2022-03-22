import React, { useState } from 'react'
import '../Styles/login.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {FaFacebookF, FaGoogle, FaLinkedinIn} from 'react-icons/fa'

function Login() {

const [slide,setSlide]=useState(false)
const slidOn=()=>{

		setSlide(true)
}
const slidOff=()=>{

		setSlide(false)
}

  return (
      <>
    {/* <div>Login</div> */}
<Navbar/>
<div className='d-flex justify-center items-center h-[100vh] font-montserrat  bg-gradient-to-r from-[#200122] to-[#6f0000] backdrop-blur-md'>

<Container className={`containerr ${slide ?`right-panel-active`:``}`} id="container">
	<div className="form-container sign-up-container">
		<form className='bg-[#ffffff] d-flex flex-column justify-center items-center px-[50px] h-100 text-center' action="#">
			<h1 className="font-bold text-3xl">Create Account</h1>
			<div className="social-container">
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaFacebookF/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaGoogle/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaLinkedinIn/></Link>
			</div>
			<span className="text-[12px]">or use your email for registration</span>
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="text" placeholder="Name" />
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="email" placeholder="Email" />
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="password" placeholder="Password" />
			<button className='ghost'>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className='bg-[#ffffff] d-flex flex-column justify-center items-center px-[50px] h-100 text-center' action="#">
			<h1 className="font-bold text-3xl">Sign in</h1>
			<div className="social-container">
                <Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaFacebookF/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaGoogle/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaLinkedinIn/></Link>
			</div>
			<span className="text-[12px]">or use your account</span>
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="email" placeholder="Email" />
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="password" placeholder="Password" />
			<Link to='' className='text-[#333] text-[14px] my-[15px]'>Forgot your password?</Link>
			<button className="ghost">Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className="font-bold text-3xl">Welcome Back!</h1>
				<p className=" text-[14px] font-thin leading-[20px] tracking-wide mt-[20px] mb-[30px]">To keep connected with us please login with your personal info</p>
				<button className="ghost in" id="signIn" onClick={()=>slidOff()} >Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className="font-bold text-3xl">Hello, Friend!</h1>
				<p className=" text-[14px] font-thin leading-[20px] tracking-wide mt-[20px] mb-[30px]">Enter your personal details and start journey with us</p>
				<button className="ghost in" id="signUp" onClick={()=>slidOn()}>Sign Up</button>
			</div>
		</div>
	</div>
</Container>

</div>    
</>
  )
}

const Container=styled.div`
		
`

export default Login