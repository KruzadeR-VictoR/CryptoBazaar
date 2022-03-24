import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from './Footer'
import styled from "styled-components";
import { AiOutlineSwap } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import {FaTwitter,FaFacebook,FaRedditAlien,FaGithub,FaLink,FaRegHeart} from 'react-icons/fa'

function Singlecoin() {
  const { id } = useParams();
  const getCoinData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}`
    );
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getCoinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <Navbar />
      <div>Singlecoin is: {id}</div>
      <SingleCoin className="bg-[#1F3736]  font-montserrat">
        {/* first section */}
        <div className=" container d-flex py-md-3">
          <div className="basis-1/2 d-flex flex-column py-md-3 px-md-4 gap-y-4">
            <div className="d-flex gap-x-10">
              <div>
                {/* <img src="" alt="" /> */}
                <h1 className="text-3xl text-white">Bitcoin</h1>
                <span className="text-slate-100">BTC</span>
              </div>
              <div className="px-md-5">
                <h1 className="text-3xl text-white">$36806.78</h1>
                <span className="text-slate-100">1.00000000 BTC</span>
              </div>
            </div>
            <div className="d-flex gap-x-10 pt-md-4 mt-md-2">
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">MARKET CAP</h3>
                <h2 className="font-bold text-white tracking-wide">$693.34</h2>
              </div>
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">VOLUME</h3>
                <h2 className="font-bold text-white tracking-wide">$693.34</h2>
              </div>
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">VOL/MCAP</h3>
                <h2 className="font-bold text-white tracking-wide">$693.34</h2>
              </div>
              <div className="d-flex flex-column gap-y-2">
                <h3 className="text-slate-400">ALL TIME HIGH</h3>
                <h2 className="font-bold text-white tracking-wide">$693.34</h2>
              </div>
            </div>
          </div>
          <div className="d-flex basis-1/2 justify-center items-center">
            {/* Right side Converter */}
            <div className="d-flex justify-center items-center gap-x-3 ">
              <div className="d-flex rounded-md overflow-hidden w-2/5">
                <div className="bg-[#596063] d-flex p-2 px-md-3 text-white focus:text-white">
                  BTC
                </div>
                <input
                  type="text"
                  className="bg-[#1B4D4A] px-md-3 text-white"
                  placeholder="Convert BTC"
                />
              </div>
              <AiOutlineSwap color="#00D2C6" />
              <div className="d-flex rounded-md overflow-hidden w-2/5">
                <div className="bg-[#596063] d-flex p-2 px-md-3 text-white">
                  INR
                </div>
                <input
                  type="text"
                  className="bg-[#1B4D4A] px-md-3 text-white"
                  placeholder="Convert BTC"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-black"/>
        {/* 2nd section */}
        <div className="container d-flex items-center py-md-4 text-white">
          <div className="basis-1/2 d-flex flex-column items-center gap-y-5">
            <div className="d-flex gap-x-10">
              <div>
                <h1 className="text-sm text-slate-400">1H USD</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H USD</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H USD</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H USD</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H USD</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H USD</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
            </div>
            <div className="d-flex gap-x-10">
              <div>
                <h1 className="text-sm text-slate-400">1H BTC</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H BTC</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H BTC</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H BTC</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H BTC</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H BTC</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
            </div>
            <div className="d-flex gap-x-10">
              <div>
                <h1 className="text-sm text-slate-400">1H ETH</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H ETH</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H ETH</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H ETH</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H ETH</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
              <div>
                <h1 className="text-sm text-slate-400">1H ETH</h1>
                <span className="font-bold tracking-wide">0.19%</span>
              </div>
            </div>
          </div>
          <div className="basis-1/2 d-flex justify-end">
            <div className="d-flex flex-column items-end gap-y-5">
              <div className="d-flex gap-x-10">
                <div>
                  <h1  className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
                <div>
                  <h1  className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
                <div>
                  <h1  className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
                <div>
                  <h1  className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
              </div>
              <div className="d-flex gap-x-10">
                <div>
                  <h1 className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
                <div>
                  <h1 className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
                <div>
                  <h1 className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
              </div>
              <div className="d-flex gap-x-10">
                <div>
                  <h1 className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
                <div>
                  <h1 className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>
                <div>
                  <h1 className="text-slate-400">CIRC. SUPPLY</h1>
                  <span className="font-bold">18.942 M</span>
                </div>                
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-black" />
        {/* comunity links section */}
        <div className="container d-flex justify-between py-md-3">
          <div className="d-flex gap-x-5 text-slate-500">
            <span className="d-flex items-center gap-x-2"><FaRegHeart />30,215</span> | 
            <span className="cursor-pointer hover:text-white transition-all">Add to portfolio</span>
          </div>
          <div className="d-flex items-center gap-x-10 text-slate-500">
              <MdGroups size="1.5rem" className="cursor-pointer hover:text-white transition-all"/>
              <FaLink className="cursor-pointer hover:text-white transition-all"/>
              <FaTwitter className="cursor-pointer hover:text-white transition-all"/>
              <FaRedditAlien className="cursor-pointer hover:text-white transition-all"/>
              <FaGithub className="cursor-pointer hover:text-white transition-all"/>     
              <FaFacebook className="cursor-pointer hover:text-white transition-all"/>         
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
                <td>BTC/USDT</td>
                <td>FTXUS</td>
                <td>$2379.60</td>
                <td>$74.40 M</td>
                <td>$39.72 M</td>
                <td><button className="btn btn-secondary">trade now</button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>BTC/USDT</td>
                <td>FTXUS</td>
                <td>$2379.60</td>
                <td>$74.40 M</td>
                <td>$39.72 M</td>
                <td><button className="btn btn-secondary">trade now</button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>BTC/USDT</td>
                <td>FTXUS</td>
                <td>$2379.60</td>
                <td>$74.40 M</td>
                <td>$39.72 M</td>
                <td><button className="btn btn-secondary">trade now</button></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>BTC/USDT</td>
                <td>FTXUS</td>
                <td>$2379.60</td>
                <td>$74.40 M</td>
                <td>$39.72 M</td>
                <td><button className="btn btn-secondary">trade now</button></td>
              </tr>
            </tbody>

          </table>
          </div>          
  <ul class="pagination d-flex justify-center py-md-4">
    <li className="page-item"><Link to="" class="page-link bg-[#267c78] text-white">Previous</Link></li>
    <li className="page-item"><Link to="" class="page-link bg-[#267c78] text-white">1</Link></li>
    <li className="page-item"><Link to="" class="page-link bg-[#267c78] text-white">2</Link></li>
    <li className="page-item"><Link to="" class="page-link bg-[#267c78] text-white">3</Link></li>
    <li className="page-item"><Link to="" class="page-link bg-[#267c78] text-white">Next</Link></li>
  </ul>
        </div>
        {/* about coin */}
        <div className="px-[15rem] py-md-5 bg-[#0E3533]">
          <h1 className="text-2xl text-white">About BTC</h1>
          <div className="d-flex pt-md-5">
          <div className="basis-1/2 text-white d-flex flex-column gap-y-4 ">
            <div className="d-flex items-center gap-x-60">
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
            </div>
            <div className="d-flex items-center gap-x-60">
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
            </div>
            <div className="d-flex items-center gap-x-60">
              <h1 className="text-slate-200">Coin Type</h1>
              <span className="text-[#3cd6cc]">coin</span>
            </div>
          </div>          
          <div className="basis-1/2 d-flex flex-column">
            <h1 className="text-2xl text-white">What is BTC ?</h1>
            <p className="pt-md-4 text-slate-400 text-justify"> Bitcoin is the first cryptocurrency and decentralized global payment system - the true OG. Bitcoin was envisioned as an alternative to traditional electronic payment methods, removing the requirement for a central bank or administrator. Transactions on the Bitcoin network are sent between users directly with no intermediary. All transactions are recorded in a public distributed ledger referred to as a blockchain. Blockchain is an immutable append-only data structure. Each block uses the previous block's hash to create its own hash. Blockchain is a stateless protocol, with each block representing a state change and containing a summary of all the transactions in the block over a given time frame (block time). Bitcoin is powered by a distributed network of validators providing computational power to “mine” blocks on the blockchain. Bitcoin uses a Proof-of-Work consensus model to validate transactions based on the SHA-256 hashing function. Every nodes on the bitcoin network must reach consensus to verify and agree upon each transaction for the next block to be mined. Mined BTC can be exchanged for other currencies, products, and services. Bitcoin was originally invented by an unknown person or group under the pseudonym Satoshi Nakamoto and released as open-source software in 2009. Beyond its inception as a digital currency, Bitcoin has attracted many investors to explore its functionality as a store of value instrument, reaching an all-time high $1.1 trillion market cap in March 2021.</p>
          </div>
          </div>         
        </div>
      </SingleCoin>      
      <Footer/>
    </>
  );
}

const SingleCoin = styled.div``;

export default Singlecoin;
