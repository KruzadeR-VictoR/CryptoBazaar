import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import styles from '../Styles/CoinHome.css'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from './Footer'

function Coins() {
  // const navigate=useNavigate()
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
    {/* <div>Coins</div> */}
    <Navbar/>
    <Coin className='d-flex flex-column justify-content-center pt-md-5'>    
    <div className='px-md-5'>
    <h1 className='text-center text-3xl font-fredericka tracking-widest pt-md-5'>Coins</h1>    
    <p className='text-center w-75 text-slate-400 p-md-4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nam culpa ea expedita doloribus provident? Fuga consequuntur mollitia, voluptates officiis expedita veniam itaque fugiat dolor?</p>
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
            <tbody id="data" className='bg-transparent'>                      
            {coins.map((coin,index)=>(                                                                       
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
    <Pagination className='d-flex justify-center py-5'>
  <ul className="pagination">
    <li className="page-item"><Link to="/news/prev" class="page-link">Previous</Link></li>
    <li className="page-item active"><Link to="/news/1" class="page-link">1</Link></li>
    <li className="page-item"><Link to="/news/2" class="page-link">2</Link></li>
    <li className="page-item"><Link to="/news/3" class="page-link">3</Link></li>
    <li className="page-item"><Link to="/news/next" class="page-link">Next</Link></li>
  </ul>
</Pagination> 
    <hr />
    <Footer/>
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
`
const Row=styled.tr`
  &:hover{
      background-color:teal !important;
      color:white !important;
  }   
`
const Pagination=styled.div`
    // color:red;
    // gap:5rem;
`


export default Coins