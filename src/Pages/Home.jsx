import React from "react";
import Navbar from "../Components/Navbar";
import HeroSlider from "../Components/HeroSlider";
import CoinHome from "../Components/CoinHome";
import News from "../Components/News";
import FooterHome from "../Components/FooterHome";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";

function Home({user}) {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) setUser(user);
  //     else setUser(null);
  //   });
  // }, []);
  return (
    <>
      {/* <div>Home</div>            */}
      <Navbar user={user}/>
      <HeroSlider />
      <CoinHome />
      <News />
      <FooterHome />
    </>
  );
}

export default Home;
