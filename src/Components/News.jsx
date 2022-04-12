import React, { useEffect, useState } from "react";
import image from "../images/Crypto.jpg";
import styled from "styled-components";
import { BsLink45Deg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function News() {
  const navigate = useNavigate();
  useEffect(() => {
    getdata();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [allnews, setAllnews] = useState([]);
  // const Api_key="828801dba8f9036c6d132ef25583b8f1b0e9592e"
  // const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const base_URL =
    "https://cryptopanic.com/api/v1/posts/?auth_token=828801dba8f9036c6d132ef25583b8f1b0e9592e&public=true";
  // fetch(base_URL,{
  //     method:'GET',
  //     headers:{
  //         'Content-Type':'application/json',
  //         // 'Access-Control-Allow-Origin':'*'
  //     }
  // }).then((res)=>{
  //     res.json().then((datas)=>{
  //         console.log(datas);
  //     })
  // })
  // eslint-disable-next-line no-unused-vars
  // let options = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": "true",
  //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  //     "Access-Control-Allow-Headers ": "Origin, Content-Type, Accept ",
  //   },
  // };
  const getdata = async () => {
    const call = await fetch(`${base_URL}`);
    const res = await call.json();
    const news_data = res.results;
    console.log(news_data);
    setAllnews(news_data);
  };
  return (
    <>
      <NewsPage className="p-md-5">
        <h1 className="fs-2 font-montserrat tracking-wider">News and Events</h1>
        <NewsHead className="d-flex justify-center gap-x-10 pt-md-5">
          {allnews.slice(0, 3).map((news) => (
            <>
              <div
                key={news?.id}
                className="card cursor-pointer rounded-md overflow-hidden hover:-translate-y-5 transition-all"
                style={{ width: "18rem" }}
                onClick={() => {
                  window.open(`http://${news.domain}/${news.slug}`);
                }}
              >
                <img src={image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text text-sm text-slate-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum, aperiam!
                  </p>
                  {/* <Button className='d-flex justify-start align-items-center pt-md-3'><button className='btn btn-primary px-md-4'>Read more</button></Button> */}
                  <div className="d-flex justify-between pt-md-3">
                    <span className="text-xs text-muted">
                      ({news.created_at})
                    </span>
                    <span className="text-xs text-muted">{news.domain}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </NewsHead>
        <NewsStack className="d-flex justify-center pt-md-5">
          <div>
            {allnews.slice(3, 13).map((news, index) => (
              <div
                key={news?.id}
                className="d-flex gap-x-5 my-md-3 bg-slate-100 p-2 py-3 rounded-md cursor-pointer"
                onClick={() => {
                  window.open(`http://${news.domain}/${news.slug}`);
                }}
              >
                <Image src={image} alt="" />
                <div>
                  <h5 className="font-bold">{news.title}</h5>
                  <p className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut porro totam rerum nulla autem illum.
                  </p>
                  <div className="d-flex items-center">
                    <span className="text-xs text-muted">(3 minutes ago)</span>
                    <span className="d-flex items-center text-xs text-blue-400 md:pl-5">
                      <BsLink45Deg />
                      {news.domain}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </NewsStack>
        <div className="d-flex justify-center pt-md-3">
          <button
            className="btn btn-primary px-md-4"
            onClick={() => navigate("/news")}
          >
            More News
          </button>
        </div>
      </NewsPage>
    </>
  );
}

//| styles
const NewsPage = styled.div`
  // color:red;
  // gap:5rem;
`;
const NewsHead = styled.div`
  // color:red;
  // gap:5rem;
`;
const NewsStack = styled.div`
  // color:red;
  // gap:5rem;
`;
// const Button=styled.div`
//     // color:red;
//     // gap:5rem;
// `
const Image = styled.img`
  max-height: 100px;
  max-width: 100px;
  border-radius: 5px;
  object-fit: cover;
`;

export default News;
