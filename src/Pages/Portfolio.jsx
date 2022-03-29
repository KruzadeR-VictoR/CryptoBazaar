import React, {useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from './Footer'
import styled from 'styled-components'
import {FaEyeSlash,FaEye,FaChevronDown,FaPlus,FaAngleLeft} from 'react-icons/fa'
import { AiFillSetting } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";


function Portfolio({user}) {
  // to tpggle the eye button
  const [isClicked,setIsClicked]=useState(false)
  const isVisible=()=>{
    if(isClicked)
    setIsClicked(false)
    else
    setIsClicked(true)        
  }    

  // fetch the coins
  useEffect(()=>{
    getCoins()
},[])
const [coins,setCoins]=useState([])
const baseUrl="https://api.coingecko.com/api/v3/coins/"    
const getCoins=async ()=>{
    await fetch(`${baseUrl}`,{
        method:'GET',            
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'                
        }
    })
    .then((response)=>{
        if(response.ok){
            response.json().then((coinData)=>{
                // console.log(coinData);
                setCoins(coinData)
            })
        }
    })
    .catch((error)=>{
        console.log("Error : "+error);
    })        

}
  return (
      <>
    <Navbar user={user}/>
    {/* <div className='grid place-items-center h-[100vh] text-3xl font-bold'>Portfolio</div> */}
    <Port className=' bg-[#1F3736] font-montserrat py-md-5'>
      <Header className='text-white d-flex justify-around items-center pb-md-2'>
        <h1 className='text-xl'>Quick Portfolio</h1>
        <div className='d-flex gap-x-10'>
        <button className='btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2'>i</button>
        <button className='btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2' onClick={()=>isVisible()}>{isClicked ? <FaEyeSlash/> : <FaEye/>}</button>
        <button className='btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2'>Switch Portfolio<FaChevronDown/></button>
        <button className='btn bg-[#04A79D] d-flex items-center gap-x-2'><FaPlus/>New Portfolio</button>        
        </div>
      </Header>
      <Quickport className='container bg-[#132524] rounded-bl-md text-white p-md-3 d-flex flex-column justify-center'>
        <h3 className='text-center text-sm text-gray-400'>Total Value</h3>        
        <h1 className='text-center text-xl font-bold tracking-wider'>43,971.87</h1>
        <div className='mx-md-5 pt-md-3'>
          <table className='table text-white table-borderless'>
            <thead className='text-center text-gray-500'>
              <tr>
                <th scope='col'>1H</th>
                <th scope='col'>24H</th>
                <th scope='col'>7D</th>
                <th scope='col'>30D</th>
                <th scope='col'>90D</th>
                <th scope='col'>1Y</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                {/* <th scope='row'>1</th> */}
                <td>$1.08K <p>-14.41%</p></td>
                <td>$1.08K <p>14.41%</p></td>
                <td>$1.08K <p>14.41%</p></td>
                <td>$1.08K <p>-14.41%</p></td>
                <td>$1.08K <p>14.41%</p></td>
                <td>$1.08K <p>-14.41%</p></td>
              </tr>             
            </tbody>
          </table>
        </div>
      </Quickport>
      <div className='d-flex justify-center items-center gap-x-4 mt-md-5'>
        <span className='h-[1px] w-[100%] bg-[#0000007A]'></span>
        <button className='btn bg-[#375554] d-flex items-center  gap-x-2 text-white'><FaAngleLeft/>Undo</button>
        <button className='btn bg-[#04A79D] d-flex items-center  gap-x-2 whitespace-nowrap text-white'><FaPlus/>Add a Coin</button>
        <button className='btn bg-[#375554] d-flex items-center  gap-x-2 text-white'>Redo <FaAngleLeft style={{ transform: 'rotate(180deg)' }}/></button>
        <span className='h-[1px] w-[100%] bg-[#0000007A] '></span>
      </div>
      <h1 className='text-white text-xl px-md-5 py-md-5 tracking-wider'>Holdings</h1>
      <div className='d-flex justify-between px-md-5'>
        <button className='btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2'><AiFillSetting/>Customize</button>
        <button className='btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2'><SiMicrosoftexcel/>Export CSV</button>
      </div>

  {/* Coins */}
  <div className="data table-responsive-md px-md-5">
        <table style={{backgroundColor:"rgba(31, 92, 89, 0.1)"}} className="table table-borderless table-hover text-white container my-md-5"> 
            <thead className='table-light'>
                <tr>
                <th className="col">#</th>
                <th className="col">Name</th>
                <th className="col">Price</th>
                <th className="col">Market Cap</th>
                <th className="col">24H</th>
                <th className="col">Circulating Supply</th>
                <th className="col">7D Chart</th>
                </tr>
            </thead>
            <tbody id="data">                      
            {coins.slice(0,18).map((coin,index)=>(                                                                       
                    <Row key={coin.id}>
                        <td style={tD}>{coin.market_data.market_cap_rank}</td>
                        <td style={tD} className='d-flex flex-row cursor-pointer'><img className='mx-md-3' src={coin.image.small} alt="" /><div className='d-flex flex-column hover:underline'>{coin.name}<span>{coin.symbol}</span></div></td>
                        <td style={tD}>{coin.market_data.current_price.inr}</td>
                        <td style={tD}>{coin.market_data.market_cap.inr}</td>  
                        <td style={tD}>{coin.market_data.price_change_24h}</td>                      
                        <td style={tD}>{coin.market_data.circulating_supply}</td>
                        <td style={tD}>Chart</td>
                    </Row>                  
            ))}            
            </tbody>
        </table>
    </div>
    <div className='grid justify-center'>
    <button className='btn btn-danger'>Delete Portfolio</button>
    </div>
    </Port>
    <Footer/>
</>
  )
} 
//| styles

const tD={
  verticalAlign:"middle"
}
// const Coin=styled.div`
//   background-color:#002523;
//   color:white;       
// `
const Row=styled.tr`
  &:hover{
      background-color:teal !important;
      color:white !important;
  }   
`

const Port=styled.div`

`
const Quickport=styled.div`

`
const Header=styled.div`

`

export default Portfolio