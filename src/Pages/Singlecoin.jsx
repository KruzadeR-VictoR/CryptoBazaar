import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import { AiOutlineSwap } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaRedditAlien,
  FaGithub,
  FaLink,
  FaRegHeart,
} from "react-icons/fa";

function Singlecoin({user}) {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const getCoinData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}`
    );
    const data = await res.json();
    console.log(data);
    setCoin(data);
  };
  useEffect(() => {
    getCoinData();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // console.log(coins.name); 

  const [amount,setLAmount]=useState()
  const handleCalculation=(e)=>{
    console.log('hello')
    // setLAmount(e.target.value);
    // const res=
    setLAmount((coin.market_data.current_price.inr)*(e.target.value));
  }

  return (
    <>
      <Navbar user={user}/>
      <div className="bg-[#1F3736] text-white flex flex-column items-center text-2xl font-montserrat tracking-wide py-md-3">
        {coin.symbol?.toUpperCase()} Price{" "}
        <span className="text-sm text-gray-300">All about {coin.name}</span>
      </div>
      <SingleCoin className="bg-[#1F3736]  font-montserrat">
        {/* first section */}
        <div className=" container d-flex py-md-3 mx-auto whitespace-nowrap">
          <div className="basis-1/2 d-flex flex-column py-md-3 px-md-4 gap-y-4">
            <div className="d-flex gap-x-10">
              <div className="d-flex items-center gap-x-4">
                <img
                  className="object-fit"
                  src={coin.image?.small}
                  alt={coin.name}
                />
                <div>
                  <h1 className="text-3xl text-white">{coin?.name}</h1>
                  <span className="text-slate-100">
                    {coin.symbol?.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="px-md-5">
                <h1 className="text-3xl text-white">
                  $ {coin?.market_data?.current_price.usd}
                </h1>
                <span className="text-slate-100">
                  {coin?.market_data?.current_price.btc} BTC
                </span>
              </div>
            </div>
            <div className="d-flex gap-x-10 pt-md-4 mt-md-2">
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">MARKET CAP</h3>
                <h2 className="font-bold text-white tracking-wide">
                  $ {coin.market_data?.market_cap.usd}
                </h2>
              </div>
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">VOLUME</h3>
                <h2 className="font-bold text-white tracking-wide">
                  $ {coin.market_data?.total_volume.usd}
                </h2>
              </div>
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">VOL/MCAP</h3>
                <h2 className="font-bold text-white tracking-wide">2.41%</h2>
              </div>
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">ALL TIME HIGH</h3>
                <h2 className="font-bold text-white tracking-wide">
                  $ {coin.market_data?.ath.usd}
                </h2>
              </div>
            </div>
          </div>
          <div className="d-flex basis-1/2 justify-center items-center">
            {/* Right side Converter */}
            <div className="d-flex justify-center items-center gap-x-3 ">
              <div className="d-flex rounded-md overflow-hidden">
                <div className="bg-[#596063] d-flex p-2 px-md-3 text-white focus:text-white">
                  {coin.symbol?.toUpperCase()}
                </div>
                <input
                  type="text"
                  className="bg-[#1B4D4A] w-100 px-md-3 text-white"
                  placeholder="Enter amount" onChange={(e)=>handleCalculation(e)}
                />
              </div>
              <AiOutlineSwap color="#00D2C6" />
              <div className="d-flex rounded-md overflow-hidden bg-warning">
                <div className="bg-[#596063] d-flex p-2 px-md-3 text-white">
                  INR
                </div>
                <input
                  type="text"
                  className="bg-[#1B4D4A] w-100 px-md-3 text-white"
                  placeholder="Enter amount" value={amount ? amount : ''}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-black" />
        {/* 2nd section */}
        <div className="container d-flex items-center py-md-4 text-white">
          <div className="basis-1/2 d-flex flex-column items-center gap-y-5">
            <div className="d-flex gap-x-10 whitespace-nowrap">
              <div>
                <h1 className="text-sm text-slate-400">1H USD</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">24H USD</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">7D USD</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">30D USD</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">60D USD</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_60d_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1Y USD</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
            </div>
            <div className="d-flex gap-x-10 whitespace-nowrap">
              <div>
                <h1 className="text-sm text-slate-400">1H BTC</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_1h_in_currency.btc.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">24H BTC</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_24h_in_currency.btc.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">7D BTC</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_7d_in_currency.btc.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">30D BTC</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_30d_in_currency.btc.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">60D BTC</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_60d_in_currency.btc.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1Y BTC</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_1y_in_currency.btc.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
            </div>
            <div className="d-flex gap-x-10 whitespace-nowrap">
              <div>
                <h1 className="text-sm text-slate-400">1H ETH</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_1h_in_currency.eth.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">24H ETH</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_24h_in_currency.eth.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">7D ETH</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_7d_in_currency.eth.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">30D ETH</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_30d_in_currency.eth.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">60D ETH</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_60d_in_currency.eth.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1Y ETH</h1>
                <span className="font-bold tracking-wide">
                  {coin.market_data?.price_change_percentage_1y_in_currency.eth.toFixed(
                    2
                  )}
                  %
                </span>
              </div>
            </div>
          </div>
          <div className="basis-1/2 d-flex justify-end">
            <div className="d-flex flex-column items-end gap-y-5">
              <div className="d-flex gap-x-10">
                <div>
                  <h1 className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">
                    $ {coin.market_data?.circulating_supply}
                  </span>
                </div>
                <div>
                  <h1 className="text-slate-400">TOTAL SUPPLY</h1>
                  <span className="font-bold">
                    $ {coin.market_data?.total_supply}
                  </span>
                </div>
                <div>
                  <h1 className="text-slate-400">MAX SUPPLY</h1>
                  <span className="font-bold">
                    $ {coin.market_data?.max_supply}
                  </span>
                </div>
                <div>
                  <h1 className="text-slate-400">TOTAL CAP</h1>
                  <span className="font-bold">
                    $ {coin.market_data?.total_volume.usd}
                  </span>
                </div>
              </div>
              <div className="d-flex gap-x-10">
                <div>
                  <h1 className="text-slate-400">24H RANGE</h1>
                  <span className="font-bold">$ 18.942 M</span>
                </div>
                <div>
                  <h1 className="text-slate-400">24H LOW</h1>
                  <span className="font-bold">
                    $ {coin.market_data?.low_24h.usd}
                  </span>
                </div>
                <div>
                  <h1 className="text-slate-400">24H HIGH</h1>
                  <span className="font-bold">
                    $ {coin.market_data?.high_24h.usd}
                  </span>
                </div>
              </div>
              <div className="d-flex gap-x-10">
                <div>
                  <h1 className="text-slate-400">LIQUIDUTY SCORE</h1>
                  <span className="font-bold">{coin.liquidity_score}</span>
                </div>
                <div>
                  <h1 className="text-slate-400">TVL</h1>
                  <span className="font-bold">
                    ${" "}
                    {coin.market_data?.total_value_locked
                      ? coin.market_data?.total_value_locked
                      : "-"}
                  </span>
                </div>
                {/* <div>
                  <h1 className="text-slate-400">ASK +2%</h1>
                  <span className="font-bold">18.942 M</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-black" />
        {/* comunity links section */}
        <div className="container d-flex justify-between py-md-3">
          <div className="d-flex gap-x-5 text-slate-500">
            <span className="d-flex items-center gap-x-2">
              <FaRegHeart />
              30,215
            </span>{" "}
            |
            <span className="cursor-pointer hover:text-white transition-all">
              Add to portfolio
            </span>
          </div>
          <div className="d-flex items-center gap-x-10 text-slate-500">
            <MdGroups
              size="1.5rem"
              className="cursor-pointer hover:text-white transition-all"
              onClick={() => {
                window.open(`${coin.links.homepage[0]}`);
              }}
            />
            <FaLink
              className="cursor-pointer hover:text-white transition-all"
              onClick={() => {
                window.open(`${coin.links.homepage[0]}`);
              }}
            />
            <FaTwitter
              className="cursor-pointer hover:text-white transition-all"
              onClick={() => {
                window.open(
                  `https://twitter.com/${coin.links.twitter_screen_name}`
                );
              }}
            />
            <FaRedditAlien
              className="cursor-pointer hover:text-white transition-all"
              onClick={() => {
                window.open(`${coin.links.subreddit_url}`);
              }}
            />
            <FaGithub
              className="cursor-pointer hover:text-white transition-all"
              onClick={() => {
                window.open(`${coin.links.repos_url.github[0]}`);
              }}
            />
            <FaFacebook
              className="cursor-pointer hover:text-white transition-all"
              onClick={() => {
                window.open(
                  `https://www.facebook.com/${coin.links.facebook_username}`
                );
              }}
            />
          </div>
        </div>
        <hr className="bg-black" />
        {/* Exchange Markets */}
        <div className="container py-md-4">
          <h1 className="text-2xl text-white">BTC Markets</h1>
          <span className="text-[#3cd6cc]">Report a missing market</span>
          <div className="d-flex justify-center pt-md-3 mt-md-4">
            <table className="table text-center">
              <thead className="text-white">
                <tr>
                  <th>Sl no.</th>
                  <th>Market</th>
                  <th>Exchange</th>
                  <th>Price</th>
                  <th>Volume 24H</th>
                  <th>Liquidity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr>
                  <th scope="row">1</th>
                  <td>{coin.symbol?.toUpperCase()}/USDT</td>
                  <td>Binance</td>
                  <td>$ {coin.market_data?.current_price.usd}</td>
                  <td>{coin.market_data?.market_cap_change_percentage_24h.toFixed(2)} %</td>
                  <td>$39.72 M</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        window.open(
                          `https://www.binance.com/en/trade/${coin.symbol?.toUpperCase()}_USDT`
                        );
                      }}
                    >
                      trade now
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>{coin.symbol?.toUpperCase()}/USDT</td>
                  <td>KuCoin</td>
                  <td>$ {coin.market_data?.current_price.usd}</td>
                  <td>{coin.market_data?.market_cap_change_percentage_24h.toFixed(2)} %</td>
                  <td>$39.72 M</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        window.open(
                          `https://www.kucoin.com/trade/${coin.symbol?.toUpperCase()}-USDT`
                        );
                      }}
                    >
                      trade now
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>{coin.symbol?.toUpperCase()}/USDT</td>
                  <td>FTXUS</td>
                  <td>$ {coin.market_data?.current_price.usd}</td>
                  <td>{coin.market_data?.market_cap_change_percentage_24h.toFixed(2)} %</td>
                  <td>$39.72 M</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        window.open(
                          `https://ftx.com/trade/${coin.symbol?.toUpperCase()}/USDT`
                        );
                      }}
                    >
                      trade now
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>{coin.symbol?.toUpperCase()}/USDT</td>
                  <td>WazirX</td>
                  <td>$ {coin.market_data?.current_price.usd}</td>
                  <td>{coin.market_data?.market_cap_change_percentage_24h.toFixed(2)} %</td>
                  <td>$39.72 M</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        window.open(
                          `https://wazirx.com/exchange/${coin.symbol?.toUpperCase()}-INR`
                        );
                      }}
                    >
                      trade now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="pagination d-flex justify-center py-md-4">
            <li className="page-item">
              <Link to="" className="page-link bg-[#267c78] text-white">
                Previous
              </Link>
            </li>
            <li className="page-item">
              <Link to="" className="page-link bg-[#267c78] text-white">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link to="" className="page-link bg-[#267c78] text-white">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link to="" className="page-link bg-[#267c78] text-white">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link to="" className="page-link bg-[#267c78] text-white">
                Next
              </Link>
            </li>
          </ul>
        </div>
        {/* about coin */}
        <div className="px-[15rem] py-md-5 bg-[#0E3533]">
          <h1 className="text-2xl text-white">
            About {coin.symbol?.toUpperCase()}
          </h1>
          <div className="d-flex pt-md-5">
            <div className="basis-1/2 text-white d-flex flex-column gap-y-4 ">
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">Coin Type</h1>
                <span className="text-[#3cd6cc]">coin</span>
              </div>
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">Coin Rank</h1>
                <span className="text-[#3cd6cc]">
                  {coin.market_data?.market_cap_rank}
                </span>
              </div>
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">Proof</h1>
                <span className="text-[#3cd6cc]">Pow</span>
              </div>
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">Hash</h1>
                <span className="text-[#3cd6cc]">{coin.hashing_algorithm}</span>
              </div>
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">Community Score</h1>
                <span className="text-[#3cd6cc]">{coin.community_score}</span>
              </div>
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">24h MCap Change</h1>
                <span className="text-[#3cd6cc]">
                  {coin.market_data?.market_cap_change_percentage_24h.toFixed(
                    3
                  )}
                  %
                </span>
              </div>
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">Price to BTC</h1>
                <span className="text-[#3cd6cc]">
                  {coin.market_data?.current_price.btc.toFixed(2)}
                </span>
              </div>
              <div className="d-flex items-center justify-between pe-md-5">
                <h1 className="text-slate-200">Fully Diluted Market Cap</h1>
                <span className="text-[#3cd6cc]">
                  ${coin.market_data?.fully_diluted_valuation.usd}
                </span>
              </div>
              {/* <div className="d-flex items-center gap-x-60">
                <h1 className="text-slate-200">Coin Type</h1>
                <span className="text-[#3cd6cc]">coin</span>
              </div>
              <div className="d-flex items-center gap-x-60">
                <h1 className="text-slate-200">Coin Type</h1>
                <span className="text-[#3cd6cc]">coin</span>
              </div>
              <div className="d-flex items-center gap-x-60">
                <h1 className="text-slate-200">Coin Type</h1>
                <span className="text-[#3cd6cc]">coin</span>
              </div> */}
            </div>
            <div className="basis-1/2 d-flex flex-column">
              <h1 className="text-2xl text-white">What is {coin.name} ?</h1>
              <p className="pt-md-4 text-slate-400">{coin.description?.en}</p>
            </div>
          </div>
        </div>
      </SingleCoin>
      <Footer />
    </>
  );
}

const SingleCoin = styled.div``;

export default Singlecoin;
