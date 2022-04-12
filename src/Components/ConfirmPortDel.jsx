import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GrClose as CloseBtn } from "react-icons/gr";
import { useCallback } from "react";
// import { animated, useSpring } from '@react-spring/web'
import { motion } from "framer-motion";

function ConfirmPortDel({ showDelete, setShowDelete }) {
  const handleDelete = (e) => {
    e.preventDefault()
    setShowDelete((prev) => !prev);
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    console.log(modalRef.current);
    if (modalRef.current === e.target) {
      setShowDelete(false);
    }
  };

  const keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showDelete) {
        setShowDelete(false);
      }
    },
    [setShowDelete, showDelete]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

  return (
    <>
      {showDelete ? (
        <ModalContainer
          ref={modalRef}
          className="absolute inset-0 flex justify-center items-center backdrop-opacity-10 z-10"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={closeModal}
        >
          {/* <animated.div style={animation}> */}
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
            className="absolute top-70 z-[1]  w-[600px] bg-[#212736] p-md-4 rounded-md"
          >
            <div className="flex justify-between pe-md-3">
              <h1 className="text-2xl text-white text-center font-montserrat tracking-wide mb-3">
                {" "}
                Do you want to delete yout portfolio ?
              </h1>
              <CloseBtn
                className="cursor-pointer"
                size="20px"
                color="#14b8a6"
                onClick={() => setShowDelete((prev) => !prev)}
              />
            </div>
            <form className="flex flex-column">
                <div className="flex gap-x-4 items-center pt-md-3 mx-auto">
              <input  type="checkbox" name="confrmDel" id="confirm"/>
              <span className="text-slate-300 font-montserrat font-thin text-xs tracking-wider">You can not retrive this portfolio later .</span>
              </div>
              <div className=" flex gap-x-10 pt-md-4 justify-center">
                <button className="btn btn-secondary">Cancel</button>
                <button className="btn btn-danger" onClick={(e)=>handleDelete(e)}>Delete</button>
              </div>
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

//| styles

const ModalContainer = styled.div``;
// eslint-disable-next-line no-unused-vars
const Modal = styled.div``;

export default ConfirmPortDel;
