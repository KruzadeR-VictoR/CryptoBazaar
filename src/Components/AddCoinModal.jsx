import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GrClose as CloseBtn } from "react-icons/gr";
import { useCallback } from "react";
// import { animated, useSpring } from '@react-spring/web'
import {motion} from 'framer-motion'

function AddCoinModal({ showModal, setShowModal }) {
  const handleAddCoin = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    console.log(modalRef.current);
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

//   const animation = useSpring({
//       config:{
//           duration:250
//       },
//       opacity:showModal?1:0,
//     //   transform:showModal?`translateY(0%) `: `translateY(-100%)`
//   });

  return (
    <>
      {showModal ? (
        <ModalContainer
          ref={modalRef}
          className="absolute inset-0 flex justify-center items-center backdrop-opacity-10 z-10"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={closeModal}
        >
            {/* <animated.div style={animation}> */}           
          <motion.Modal 
          animate={{
            y:100,
            opacity:1,              
          }}
          initial={{
            opacity:.1
          }}
          transition={{
            type:'spring',
            stiffness:100,
            damping:5
          }}
          className="absolute top-40 z-[1]  w-[600px] bg-[#212736] p-md-4 rounded-md">
            <div className="flex justify-between pe-md-3">
              <h1 className="text-2xl text-white font-montserrat tracking-wide mb-3">
                {" "}
                Add a Coin
              </h1>
              <CloseBtn
                className="cursor-pointer"
                size="20px"
                color="#14b8a6"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </div>
            <form>
              <input
                type="text"
                className="form-control w-75 mb-3"
                placeholder="Find a coin..."
              />
              <input
                type="text"
                className="form-control w-50 mb-3"
                placeholder="Enter quantity..."
              />
              <button
                className="btn bg-[#04A79D] text-white mt-3"
                onClick={handleAddCoin}
              >
                Add
              </button>
            </form>
          </motion.Modal>          
          {/* </animated.div> */}
        </ModalContainer>
      ) : (
        ""
      )}
    </>
  );
}

const ModalContainer = styled.div``;
// eslint-disable-next-line no-unused-vars
const Modal = styled.div``;

export default AddCoinModal;
