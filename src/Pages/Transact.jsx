import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import Welcome from "../Components/Welcome";
import Services from "../Components/Services";
import Transactions from "../Components/Transactions";

function Transact({ user }) {
  return (
    <>      
      <div className="min-h-screen">
      <Navbar user={user} />
      <div className="gradient-bg-welcome">                     
        <Welcome />        
      </div>
      <Services />
      <Transactions/>
      </div>
      <Footer />
    </>
  );
}

export default Transact;
