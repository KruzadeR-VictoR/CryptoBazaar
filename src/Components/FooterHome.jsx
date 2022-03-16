import React from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import '../Styles/FooterHome.css'
import {FaTwitter,FaFacebook,FaInstagram,FaRedditAlien,FaGithub,FaRegCopyright} from 'react-icons/fa'

function FooterHome() {
  return (
      <>
      <Footer style={{backgroundColor:'#002523'}} className="font-montserrat pb-md-4">
    {/* <div>FooterHome</div> */}
    <div className='d-flex flex-column items-center'>
    <h2 className='text-center text-white text-4xl py-2'>Be the first to know about<span className='font-bold'> crypto news every day .</span></h2>
    <p className='text-sm text-slate-400 pb-md-4'>Get the latest crypto news, updates, and reports by subscribing to our free newsletter.</p>
    </div>
    <form action="" className='d-flex justify-center gap-x-10 py-md-4'>
    <label htmlFor='exampleInputEmail1' class="form-label">Email address</label>
    <input type="text" class="form-control w-1/4 px-3 tracking-wider" id="exampleInputEmail1" placeholder='Drop your mail here'/>
    <button className='btn btn-success px-md-5 font-montserrat tracking-wider'>Subscribe</button>
    </form>
    <FootLinks className='d-flex justify-evenly pt-md-5'>
    <div className='w-1/4'>
      <div className="d-flex items-center gap-x-5">
        <img className='object-cover' src={logo} alt="logo" />
        <h2 className='text-2xl text-teal-500 tracking-widest'>Cryptonite</h2>
      </div>
      <p className='text-slate-500 py-md-3'>Cryptonite  provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, it tracks community growth, open-source code development, major events and on-chain metrics .</p>
    </div>
    <div>
      <h2 className='text-white font-semibold'>About Cryptonite</h2>
      <ul className='text-slate-400 pt-md-3'>
        <li>
          <NavLink to='' className='hover:text-teal-200'>About us</NavLink>
        </li>
        <li>
          <NavLink to='' className='hover:text-teal-200'>Request form</NavLink>
        </li>
        <li>
          <NavLink to='' className='hover:text-teal-200'>Advertising</NavLink>
        </li>
        <li>
          <NavLink to='' className='hover:text-teal-200'>FAQ</NavLink>
        </li>
      </ul>
    </div>
    <div>
    <h2 className='text-white font-semibold'>Useful Links</h2>
      <ul className='text-slate-400 pt-md-3'>
        <li>
          <NavLink to='' className='hover:text-teal-200'>Help Center</NavLink>
        </li>
        <li>
          <NavLink to='' className='hover:text-teal-200'>Disclaimer</NavLink>
        </li>
        <li>
          <NavLink to='' className='hover:text-teal-200'>Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink to='' className='hover:text-teal-200'>Terms Of Service</NavLink>
        </li>
        <li>
          <NavLink to='' className='hover:text-teal-200'>Contacy Us</NavLink>
        </li>
      </ul>
    </div>
    </FootLinks>
    <SocialLinks className='d-flex justify-center gap-x-10 py-md-5'>
          <h2 className='text-slate-400 tracking-wide'>Follow on :</h2>
          <ul className='d-flex gap-x-5 '>
            <li>
              <NavLink to=""><FaTwitter className='twitter' size='1.5rem' color='#14b8a6' /></NavLink>
            </li>
            <li>
              <NavLink to=""><FaFacebook className='fb' size='1.5rem' color='#14b8a6' /></NavLink>
            </li>
            <li>
              <NavLink to=""><FaInstagram className='insta' size='1.5rem' color='#14b8a6' /></NavLink>
            </li>
            <li>
              <NavLink to=""><FaRedditAlien className='reddit' size='1.5rem' color='#14b8a6' /></NavLink>
            </li>
            <li>
              <NavLink to=""><FaGithub className='git' size='1.5rem' color='#14b8a6' /></NavLink>
            </li>
          </ul>
    </SocialLinks>
    <div className='container d-flex items-center gap-x-3 text-slate-600'>
      <FaRegCopyright/>
    2022 Cryptonite . All Rights Reserved .
    </div>
    </Footer>
    </>
  )
}

const Footer=styled.div`

`
const FootLinks=styled.div`

`
const SocialLinks=styled.div`

`

export default FooterHome