import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import styles from '../Styles/CoinHome.css'
import styled from 'styled-components'

function CoinHome() {
    const navigate=useNavigate()
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
    // console.log(coins)   
  return (
      <>
      <Coin className='d-flex flex-column justify-content-center'>
    <div>coinHome</div>
    <div className='px-md-5'>
    <h1 className='fs-2'>Coins</h1>    
    </div>
    <div className="data table-responsive-md">
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
            {coins.slice(0,10).map((coin,index)=>(                                                                       
                    <Row key={coin.id}>
                        <td style={tD}>{coin.market_data.market_cap_rank}</td>
                        <td style={tD} className='d-flex flex-row'><img className='mx-md-3' src={coin.image.small} alt="" /><div className='d-flex flex-column'>{coin.name}<span>{coin.symbol}</span></div></td>
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
    <div className='d-flex justify-center'>
        <button className='btn btn-success px-md-5' onClick={()=>navigate('/Coins')}>more Coins</button>
    </div>
    </Coin>
    </>
  )
}

//| styles

const tD={
    verticalAlign:"middle"
}
 const Coin=styled.div`
    background-color:#002523;
    color:white;  
    height:100vh  
 `
 const Row=styled.tr`
    &:hover{
        background-color:teal !important;
        color:white !important;
    }   
 `


export default CoinHome