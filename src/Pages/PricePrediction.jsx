import React from 'react'
import Navbar from '../Components/Navbar'

function PricePrediction({user}) {
  return (
      <>
    <Navbar user={user}/>
    <div className='grid place-items-center h-[100vh] text-3xl font-bold'>PricePrediction</div>

    </>
  )
}

export default PricePrediction