import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'


function Singlecoin() {
  const id=useParams()
  return (
      <>
      <Navbar/>
    <div>Singlecoin is: {JSON.stringify(id)}</div>    
    </>
  )
}

export default Singlecoin