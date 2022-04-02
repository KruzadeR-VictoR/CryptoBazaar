import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function CoinChart({Scoin}) {

    const Ycoin=`${Scoin}USDT`

  return (
    <>
      <div className="py-md-5">          
        {/* <div className="text-white">CoinChart</div> */}
        <div className="container">
        <div className="text-3xl text-white pb-md-4">{Scoin} Price Chart</div>
          <TradingViewWidget
            // autosize
            width= '100%'
            height= '710'
            symbol={Ycoin}
            interval="60"
            timezone="Asia/Kolkata"
            theme={Themes.DARK}
            locale="en"            
          />
        </div>
      </div>
    </>
  );
}

export default CoinChart;
