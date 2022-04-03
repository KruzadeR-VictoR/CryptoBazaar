import React from "react";
import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { auth } from "../firebase";

function Navbar({ title,user }) {
  const navigate = useNavigate();
  return (
    <>
      {/* <div classNameName='bg-red-700 container m-auto flex justify-center md:p-5'>
    <ul classNameName='bg-teal-200 flex md:gap-x-10'>
        <NavLink to="/" to="/Home" style={isActive=>({color:isActive?"green":"red"})}>
            <li>Home</li>
        </NavLink>
        <NavLink to="/" to="/About">
            <li>About</li>
        </NavLink>
        <NavLink to="/" to="/Contact">
            <li>Contacts</li>
        </NavLink>
    </ul>
</div>  */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-md-3">
        <div className="container-md">
          <div className="d-flex flex-row justify-content-between gap-x-5 align-items-center">
            <Logo src={logo} alt="logo" />
            <NavLink to="/" className="navbar-brand">
              {title}
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse whitespace-nowrap" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Coins" className="nav-link">
                  Coins
                </NavLink>
              </li>
              {user ? <>
              <li className="nav-item">
                <NavLink to="/Portfolio" className="nav-link">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/PricePrediction" className="nav-link">
                  Price Prediction
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Transactions" className="nav-link">
                  Transactions
                </NavLink>
              </li>
              </> : ''
              }
              <li className="nav-item">
                <NavLink to="/News" className="nav-link">
                  News
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to="/Forum" className="dropdown-item">
                      Forum
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 xs:w-[18rem]"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
            </form>
            <div className="ms-md-5 pt-4 pt-md-0 rounded-lg overflow-hidden">
              {user ? <>
              <button
                className="btn btn-primary  d-flex items-center gap-x-2 px-md-3 font-montserrat tracking-wider text-white"
                onClick={() =>auth.signOut()}
              >
                <FaUserAlt color="white" />   
                Logout             
              </button>
              </> :
              <button
              className="btn btn-primary  d-flex items-center gap-x-2 px-md-3 font-montserrat tracking-wider text-white"
              onClick={() => navigate("/Login")}
            >
              <FaUserAlt color="white" />   
              Login             
            </button>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

//| props

Navbar.defaultProps = {
  title: "CryptoBazaar",
};

//| styles

const Logo = styled.img`
  max-height: 40px;
  width: 40px;
`;

export default Navbar;
