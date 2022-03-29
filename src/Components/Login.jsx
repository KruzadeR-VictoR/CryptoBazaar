import React, { useState} from 'react'
import '../Styles/login.css'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FaFacebookF, FaGoogle, FaLinkedinIn} from 'react-icons/fa'
// import { data } from 'autoprefixer'

function Login() {

	const navigate=useNavigate()

const [slide,setSlide]=useState(false)
const slidOn=()=>{

		setSlide(true)
}
const slidOff=()=>{

		setSlide(false)
}

   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

//    handle login data

const handleLogin= async(e)=>{
	e.preventDefault();
	console.log(email,password);
	try{
	const result=await auth.signInWithEmailAndPassword(email,password)
	// window.M.toast({html: `Welcome ${result.user.email}`,classes:"green"})
	toast.success(`Welcome ${result.user.email}`,{position:"top-right"});

	setTimeout(()=>navigate('/'),3000)

	}catch(err){
		// console.log(err)
		// window.M.toast({html:err.message,classes:"green"})
		toast.error(err.message,{position:"top-right"});
	}
}

//    handle signUp data
   const handleSubmit= async(e)=>{
		e.preventDefault();
		console.log(email,password);
		try{
		const result=await auth.createUserWithEmailAndPassword(email,password)
		// window.M.toast({html: `Welcome ${result.user.email}`,classes:"green"})
		toast.success(`${result.user.email} your a/c created successfully`,{position:"top-right"});

		// setTimeout(()=>navigate('/'),3000)

		}catch(err){
			// console.log(err)
			// window.M.toast({html:err.message,classes:"green"})
			toast.error(err.message,{position:"top-right"});
		}
   }
  return (
      <>
    {/* <div>Login</div> */}
<Navbar/>
<div className='d-flex justify-center items-center h-[100vh] font-montserrat  bg-gradient-to-r from-[#200122] to-[#6f0000] backdrop-blur-md'>

<Container className={`containerr ${slide ?`right-panel-active`:``}`} id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={(e)=>handleSubmit(e)} className='bg-[#ffffff] d-flex flex-column justify-center items-center px-[50px] h-100 text-center' action="#">
			<h1 className="font-bold text-3xl">Create Account</h1>
			<div className="social-container">
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaFacebookF/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaGoogle/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaLinkedinIn/></Link>
			</div>
			<span className="text-[12px]">or use your email for registration</span>
			{/* <input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/> */}
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
			{/* <input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="password" placeholder="Confirm Password" onChange={(e)=>setCpassword(e.target.value)}/> */}
			<button className='ghost'>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={(e)=>handleLogin(e)} className='bg-[#ffffff] d-flex flex-column justify-center items-center px-[50px] h-100 text-center' action="#">
			<h1 className="font-bold text-3xl">Sign in</h1>
			<div className="social-container">
                <Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaFacebookF/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaGoogle/></Link>
				<Link to='' className="social text-[#333] text-[14px] my-[15px]"><FaLinkedinIn/></Link>
			</div>
			<span className="text-[12px]">or use your account</span>
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
			<input className='bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] mx-0 w-100 ' type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
			<Link to='' className='text-[#333] text-[14px] my-[15px]'>Forgot your password?</Link>
			<button type='submit' className="ghost">Sign In</button>
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
<ToastContainer/>
</>
  )
}

const Container=styled.div`
		
`

export default Login