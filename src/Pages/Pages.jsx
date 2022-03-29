import React, { useEffect, useState } from "react";
import Home from "./Home";
import Coins from "./Coins";
import Portfolio from "./Portfolio";
import PricePrediction from "./PricePrediction";
import Forum from "./Forum";
import NewsPage from "./NewsPage";
import ErrorPage from "./ErrorPage";
import Login from "../Components/Login";
import SingleCoin from "./Singlecoin";
import Transact from "./Transact";
import { Routes, Route } from "react-router-dom";
import { auth } from "../firebase";

function Pages() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} exact />
      <Route path="/Coins" element={<Coins user={user} />} />
      <Route path="/Portfolio" element={<Portfolio user={user} />} />
      <Route path="/PricePrediction" element={<PricePrediction />} />
      <Route path="/News" element={<NewsPage user={user} />} />
      <Route path="/Transactions" element={<Transact user={user}/>} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Coins/:id" element={<SingleCoin user={user} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Pages;
