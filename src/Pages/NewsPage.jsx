import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import image from '../images/Crypto.jpg'
import {BsLink45Deg} from 'react-icons/bs'
// import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function NewsPage({user}) {  

    const [page,setPage]=useState(1)

  useEffect(()=>{
    getdata()
  },[])
  const [allnews,setAllnews]=useState([])
  const base_URL="https://cryptopanic.com/api/v1/posts/?auth_token=828801dba8f9036c6d132ef25583b8f1b0e9592e&public=true&kind=news"    
  const getdata=async ()=>{
    const call=await fetch(`${base_URL}`)
    const res= await call.json()
    const news_data=res.results
    console.log(news_data);
    setAllnews(news_data)
}


  return (<>
      <NewsWrap>
        <Navbar user={user}/>
    {/* <div>News</div> */}
    <h5 className='text-center text-3xl font-fredericka tracking-widest pt-md-5'>NEWS AND EVENTS</h5>
    <p className='text-center w-75 text-muted font-montserrat leading-7 mx-auto p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure odit architecto placeat deserunt repellendus at facilis cumque minus tempora dolores illum, fugit ipsam veniam commodi dolorum. Reprehenderit, a numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis in adipisci molestiae quae! Pariatur accusantium quis iusto cupiditate, provident iste quam nam veritatis praesentium.</p>
    <NewsHead className='d-flex justify-center gap-x-10 pt-md-5'>
    {allnews.slice(0,3).map((news)=>(        
        <>            
            <div key={news.id} className='card cursor-pointer rounded-md overflow-hidden' style={{width:"18rem"}} onClick={()=>{window.open(`http://${news.domain}/${news.slug}`)}}>
                <img src={image} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{news.title}</h5>
                    <p className='card-text text-sm text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, aperiam!</p>
                    {/* <Button className='d-flex justify-start align-items-center pt-md-3'><button className='btn btn-primary px-md-4'>Read more</button></Button> */}
                    <div className='d-flex justify-between pt-md-3'><span className='text-xs text-muted'>({news.created_at})</span><span className='text-xs text-blue-400 d-flex items-center'><BsLink45Deg/>{news.domain}</span></div>
                </div>
            </div> 
        </>            
    ))}
    </NewsHead>
    <NewsStack className='d-flex justify-center pt-md-5'>
        <div>
    {allnews.slice((page-1)*10,(page-1)*10+15).map((news,index)=>(
        <div key={news.id} className='d-flex gap-x-5 my-md-3 bg-slate-100 p-2 py-3 rounded-md cursor-pointer' onClick={()=>{
            /* Change the domain comparison value accordingly as u want it */
             `${news.domain}`==='cointelegraph.com' ? window.open(`http://${news.domain}/news/${news.slug}`) : window.open(`http://${news.domain}/${news.slug}`)}            
        }>
            <Image src={image} alt="" />
            <div>
                <h5 className='font-bold'>{news.title}</h5>
                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut porro totam rerum nulla autem illum.</p>
                <div className='d-flex items-center'><span className='text-xs text-muted'>(3 minutes ago)</span><span className='d-flex items-center text-xs text-blue-400 md:pl-5'><BsLink45Deg/>{news.domain}</span></div>
            </div>                                        
        </div>
    ))}
    </div>    
    </NewsStack> 
    <Pagination className='d-flex justify-center py-5'>
  <ul className="pagination">
    <li className="page-item"><Link to="" className="page-link">Previous</Link></li>
    <li className="page-item"><Link to="" className="page-link" onClick={()=>setPage(1)}>1</Link></li>
    <li className="page-item"><Link to="" className="page-link" onClick={()=>{setPage(2)}}>2</Link></li>
    <li className="page-item"><Link to="" className="page-link" onClick={()=>setPage(3)}>3</Link></li>
    <li className="page-item"><Link to="" className="page-link">Next</Link></li>
  </ul>
</Pagination>
<Footer/>         
    </NewsWrap>
    </>
  )
}

//| styles

const NewsWrap=styled.div`

`
const NewsHead=styled.div`
    // color:red;
    // gap:5rem;
`
const NewsStack=styled.div`
    // color:red;
    // gap:5rem;
`
const Pagination=styled.div`
    // color:red;
    // gap:5rem;
`
// const Button=styled.div`
//     // color:red;
//     // gap:5rem;
// `
const Image=styled.img`
    max-height:100px;
    max-width:100px;
    border-radius:5px;
    object-fit:cover
`
export default NewsPage