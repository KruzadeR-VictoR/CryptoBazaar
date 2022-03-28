import React from 'react'
import Home from './Home'
import Coins from './Coins'
import Portfolio from './Portfolio'
import PricePrediction from './PricePrediction'
import Forum from './Forum'
import NewsPage from './NewsPage'
import ErrorPage from './ErrorPage'
import Login from '../Components/Login'
import SingleCoin from './Singlecoin'
import { Routes,Route } from 'react-router-dom'


function Pages() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/Coins" element={<Coins/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/PricePrediction" element={<PricePrediction/>}/>
          <Route path="/News" element={<NewsPage/>}/>
          <Route path="/Transaction" element={<Forum/>}/>          
          <Route path="/Forum" element={<Forum/>}/>          
          <Route path="/Login" element={<Login/>}/>          
          <Route path='/Coins/:id' element={<SingleCoin/>}/>
          <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default Pages