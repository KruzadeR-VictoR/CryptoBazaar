import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import {
  FaEyeSlash,
  FaEye,
  // eslint-disable-next-line no-unused-vars
  FaChevronDown,
  FaPlus,
  FaAngleLeft,
} from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import AddCoinModal from "../Components/AddCoinModal";
import CustomizeCoinsPortfolio from "../Components/CustomizeCoinsPortfolio";
import Trend from "react-trend";
import ConfirmPortDel from "../Components/ConfirmPortDel";

function Portfolio({ user }) {
  // to tpggle the eye button
  const [isClicked, setIsClicked] = useState(false);
  // set eyeButton functionality
  const [showQuickData, setShowQuickData] = useState(true);
  const isVisible = () => {
    if (isClicked) {
      setIsClicked(false);
      setShowQuickData(true);
    } else {
      setIsClicked(true);
      setShowQuickData(false);
    }
  };

  // fetch the coins
  useEffect(() => {
    getCoins();
  }, []);
  const [coins, setCoins] = useState([]);
  const baseUrl = "https://api.coingecko.com/api/v3/coins/";
  const getCoins = async () => {
    await fetch(`${baseUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((coinData) => {
            // console.log(coinData);
            setCoins(coinData);
          });
        }
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  };

  // Add coin Modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // Add Customize coins

  const [showCustomize, setShowCustomize] = useState(false);
  const openCustomize = () => {
    setShowCustomize((prev) => !prev);
  };

  // set Price quantity
  // eslint-disable-next-line no-unused-vars
  let [Quantity, setQuantity] = useState(0);
  //   // let adder=.009
  //  useEffect(()=>{
  //    let value=Quantity*3
  //    setQuantity(value)
  //  },[Quantity])
  console.log(coins);

  // delete Portfolio
  const [showDelete, setShowDelete] = useState(false);

  const openDelete = () => {
    setShowDelete((prev) => !prev);
    setShowPortFolio(false);
  };
// show Portfolio
  const [showPortFolio, setShowPortFolio] = useState(true);

  // toggle total value on quick Portfolio

  const [TValue,setTValue]=useState('43,971.87')

  return (
    <>
      <Navbar user={user} />
      <AddCoinModal showModal={showModal} setShowModal={setShowModal} />
      <CustomizeCoinsPortfolio
        showCustomize={showCustomize}
        setShowCustomize={setShowCustomize}
      />
      {/* <div className='grid place-items-center h-[100vh] text-3xl font-bold'>Portfolio</div> */}
      <Port className=" bg-[#1F3736] font-montserrat py-md-5">
        <Header className="text-white d-flex justify-around items-center pb-md-2">
          <h1 className="text-xl">Quick Portfolio</h1>
          <div className="d-flex gap-x-10">
            <button className="btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2">
              i
            </button>
            <button
              className="btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2"
              onClick={() => isVisible()}
            >
              {isClicked ? <FaEyeSlash /> : <FaEye />}
            </button>
            <div className="dropdown">
              <button
                id="SwitchPortfolio"
                className="dropdown-toggle btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2"
                data-bs-toggle="dropdown"
              >
                Switch Portfolio
                {/* <FaChevronDown /> */}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="dropdown-item" onClick={()=>setTValue('53,079.07')}>Mrutyunjay</li>
                <li className="dropdown-item" onClick={()=>setTValue('18,400.21')}>User-Test</li>
                <li className="dropdown-item" onClick={()=>setTValue('13,472.69')}>Arup</li>
              </ul>
            </div>
            <button className="btn bg-[#04A79D] d-flex items-center gap-x-2">
              <FaPlus />
              New Portfolio
            </button>
          </div>
        </Header>
        <Quickport className="container bg-[#132524] rounded-bl-md text-white p-md-3 d-flex flex-column justify-center">
          {showQuickData ? (
            <div>
              <h3 className="text-center text-sm text-gray-400">
                Total Value
              </h3>
              <h1 className="text-center text-xl font-bold tracking-wider">
                {TValue}
              </h1>
            </div>
          ) : null}
          <div className="mx-md-5 pt-md-3">
            <table className="table text-white table-borderless">
              <thead className="text-center text-gray-500">
                <tr>
                  <th scope="col">1H</th>
                  <th scope="col">24H</th>
                  <th scope="col">7D</th>
                  <th scope="col">30D</th>
                  <th scope="col">90D</th>
                  <th scope="col">1Y</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  {/* <th scope='row'>1</th> */}
                  <td>
                    {showQuickData ? "$120 " : null}
                    <p>-14.41%</p>
                  </td>
                  <td>
                    {showQuickData ? "-$480 " : null}
                    <p>10.41%</p>
                  </td>
                  <td>
                    {showQuickData ? "$1.08K " : null}
                    <p>12.41%</p>
                  </td>
                  <td>
                    {showQuickData ? "$4.08K " : null}
                    <p>-9.41%</p>
                  </td>
                  <td>
                    {showQuickData ? "-$2.30K " : null}
                    <p>12.41%</p>
                  </td>
                  <td>
                    {showQuickData ? "$10.48K " : null}
                    <p>-9.41%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Quickport>
        <div className="d-flex justify-center items-center gap-x-4 mt-md-5">
          <span className="h-[1px] w-[100%] bg-[#0000007A]"></span>
          <button className="btn bg-[#375554] d-flex items-center  gap-x-2 text-white">
            <FaAngleLeft />
            Undo
          </button>
          <button
            className="btn bg-[#04A79D] d-flex items-center  gap-x-2 whitespace-nowrap text-white"
            onClick={openModal}
          >
            <FaPlus />
            Add a Coin
          </button>
          <button className="btn bg-[#375554] d-flex items-center  gap-x-2 text-white">
            Redo{" "}
            <FaAngleLeft
              className="z-0"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <span className="h-[1px] w-[100%] bg-[#0000007A] "></span>
        </div>
        <Holdings className="relative">
          <h1 className="text-white text-xl px-md-5 py-md-5 tracking-wider">
            Holdings
          </h1>
          <div className="d-flex justify-between px-md-5">
            <button
              className="btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2"
              onClick={openCustomize}
            >
              <AiFillSetting />
              Customize
            </button>
            <div className="btn bg-[#375554] px-md-3 text-white d-flex items-center gap-x-2">
              <SiMicrosoftexcel />
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Export CSV"
              />
            </div>
          </div>

          {/* Coins */}
          {showPortFolio ? (
            <>
              <div className="data table-responsive-md px-md-5">
                <table
                  id="table-to-xls"
                  style={{ backgroundColor: "rgba(31, 92, 89, 0.1)" }}
                  className="table table-borderless table-hover text-white container my-md-5"
                >
                  <thead className="table-light">
                    <tr>
                      <th className="col">#</th>
                      <th className="col">Name</th>
                      <th className="col">Price</th>
                      <th className="col">Quantity</th>
                      {/* <th className="col">Market Cap</th> */}
                      <th className="col">24H</th>
                      <th className="col">7D</th>
                      <th className="col">30D</th>
                      {/* <th className="col">Total value</th> */}
                      <th className="col">24H High</th>
                      <th className="col">7D Chart</th>
                    </tr>
                  </thead>
                  <tbody id="data">
                    {coins.slice(0, 18).map((coin, index) => (
                      <Row key={coin.id}>
                        <td style={tD}>{coin.market_data.market_cap_rank}</td>
                        <td
                          style={tD}
                          className="d-flex flex-row cursor-pointer"
                        >
                          <img
                            className="mx-md-3"
                            src={coin.image.small}
                            alt=""
                          />
                          <div className="d-flex flex-column hover:underline">
                            {coin.name}
                            <span>{coin.symbol}</span>
                          </div>
                        </td>
                        <td style={tD}>
                          ${coin.market_data.current_price.usd}
                        </td>
                        {/* {setQuantity(Quantity + .009)} */}
                        <td style={tD}>{(Quantity += 0.009).toFixed(3)}</td>
                        <td style={tD}>
                          {coin.market_data.price_change_percentage_24h.toFixed(
                            2
                          )}
                          %
                        </td>
                        <td style={tD}>
                          {coin.market_data.price_change_percentage_7d.toFixed(
                            2
                          )}
                          %
                        </td>
                        <td style={tD}>
                          {coin.market_data.price_change_percentage_30d.toFixed(
                            2
                          )}
                          %
                        </td>
                        <td style={tD}>${coin.market_data.high_24h.usd}</td>
                        <td style={tD} className="w-[200px]">
                          <Trend
                            smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={
                              coin.market_data.market_cap_rank % 2 === 0
                                ? [0, 2, 5, 9, 5, 10, 3, 5, 0, 9, 6, 8, 2, 9, 0]
                                : [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 1, 2, 0]
                            }
                            gradient={["green", "lime", "yellow"]}
                            radius={10}
                            strokeWidth={2}
                            strokeLinecap={"butt"}
                          />
                        </td>
                      </Row>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid justify-center">
                <button className="btn btn-danger" onClick={openDelete}>
                  Delete Portfolio
                </button>
              </div>
            </>
          ) : (
            <>
              <div> No Portfolio available</div>
            </>
          )}
          <ConfirmPortDel
            showDelete={showDelete}
            setShowDelete={setShowDelete}
          />
        </Holdings>
      </Port>
      <Footer />
    </>
  );
}
//| styles

const tD = {
  verticalAlign: "middle",
};
// const Coin=styled.div`
//   background-color:#002523;
//   color:white;
// `
const Row = styled.tr`
  &:hover {
    background-color: teal !important;
    color: white !important;
  }
`;

const Port = styled.div``;
const Quickport = styled.div``;
const Header = styled.div``;
const Holdings = styled.div``;

export default Portfolio;
