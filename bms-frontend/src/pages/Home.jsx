import React from "react";
import BannerSlider from "../components/shared/BannerSlider.jsx";
import Recommended from "../components/Recommended.jsx";
import LiveEvent from "../components/LiveEvents.jsx";


const Home = () => {
  return (
    <>
      <BannerSlider />
      <Recommended />
      <LiveEvent />
    </>
  );
};

export default Home;
