import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { GrClose as CloseBtn } from "react-icons/gr";
import { useCallback } from "react";
// import { animated, useSpring } from '@react-spring/web'
import { motion } from "framer-motion";

function CustomizeCoinsPortfolio({ showCustomize, setShowCustomize }) {

  const handleCustomize = (e) => {
    e.preventDefault();
    setShowCustomize((prev) => !prev);
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    console.log(modalRef.current);
    if (modalRef.current === e.target) {
      setShowCustomize(false);
    }
  };

  const keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showCustomize) {
        setShowCustomize(false);
      }
    },
    [setShowCustomize, showCustomize]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

  return (
    <>
      {showCustomize ? (
        <CustomizeWrapper
          ref={modalRef}
          className="absolute inset-0 flex justify-center items-center backdrop-opacity-10 z-10"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={closeModal}
        >
          <motion.Modal
            animate={{
              y: 100,
              opacity: 1,
            }}
            initial={{
              opacity: 0.1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 5,
            }}
            className="absolute top-40 z-[10]  w-[800px] bg-[#212736] p-md-4 rounded-md"
          >
            <div className="flex justify-between pe-md-3">
              <h1 className="text-2xl text-white font-montserrat tracking-wide mb-3">
                Customize Layout
              </h1>
              <CloseBtn
                className="cursor-pointer"
                size="20px"
                color="#14b8a6"
                onClick={() => setShowCustomize((prev) => !prev)}
              />
            </div>
            <hr className="h-[2px] bg-white"/>
            <div className="px-md-3">
              <div className="text-white flex items-center justify-between my-md-3">
                <h3>General</h3>
                <div className="flex rounded-md overflow-hidden">
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Price
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Quantity
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Total Value
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Transactions
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Share
                  </button>
                </div>
              </div>
              <div className="text-white flex items-center justify-between my-md-3">
                <h3>Profit</h3>
                <div className="flex rounded-md overflow-hidden">
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Average Buy Price
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Unrealized Profit
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Realized Profit 
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Total Profit
                  </button>                  
                </div>
              </div>
              <div className="text-white flex items-center justify-between my-md-3">
                <h3>Price Deltas</h3>
                <div className="flex rounded-md overflow-hidden">
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    1h %
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    24h %
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    30d %
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    90d %
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    1y %
                  </button>
                </div>
              </div>
              <div className="text-white flex items-center justify-between my-md-3">
                <h3>All-Time</h3>
                <div className="flex rounded-md overflow-hidden">
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    All-Time High
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    From ATH
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    To ATH
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    Since ATH
                  </button>                  
                </div>
              </div>
              <div className="text-white flex items-center justify-between my-md-3">
                <h3>Charts</h3>
                <div className="flex rounded-md overflow-hidden">
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    24h Chart
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    7d Chart
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    30d Chart
                  </button>
                  <button className="btn px-md-3 text-white bg-[#2B3245] rounded-none border-[#329592]">
                    90d Chart
                  </button>                  
                </div>
              </div>
            </div>
            <hr className="h-[2px] bg-white"/>
            <div className="flex justify-between pt-md-4">
                <div>
                <button className="btn text-white bg-[#2B3245] px-md-4 ">Show all</button>
                <button className="btn text-white bg-[#2B3245] px-md-4 mx-md-3">Reset</button>
                </div>
                <button className="btn text-white bg-[#329592] px-md-4 mx-md-3" onClick={handleCustomize}>Close</button>
            </div>
          </motion.Modal>
        </CustomizeWrapper>
      ) : (
        ""
      )}
    </>
  );
}

const CustomizeWrapper = styled.div``;

export default CustomizeCoinsPortfolio;
