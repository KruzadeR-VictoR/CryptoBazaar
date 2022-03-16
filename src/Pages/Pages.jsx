import React from 'react'
import Home from './Home'
import Coins from './Coins'
import Portfolio from './Portfolio'
import PricePrediction from './PricePrediction'
import Forum from './Forum'
import NewsPage from './NewsPage'
import ErrorPage from './ErrorPage'
import { Routes,Route } from 'react-router-dom'


function Pages() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/Coins" element={<Coins/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/PricePrediction" element={<PricePrediction/>}/>
          <Route path="/News" element={<NewsPage/>}/>
          <Route path="/Forum" element={<Forum/>}/>
          <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default Pages