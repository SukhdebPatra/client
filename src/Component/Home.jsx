import React from "react";

import Marquee from "react-fast-marquee";
import Navbar from './Navbar'


const Home = () => {
  return (
    <>
      <Navbar/>
     <Marquee gradientColor={[66, 135, 245]} speed={[70]}>
      Welcome To A Website, Here you can find World's best Restaurant...
     </Marquee>
    </>
  );
};

export default Home;
