import React from "react";
import Footer from "../Footer/Footer";
import IndividualIntervalsHeroImage from "../HeroImage/HeroImage";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Menu";

const Home = () => {
  return (
    <div>
          <Navbar/>
          <IndividualIntervalsHeroImage/>
          <Products/>
          <Footer/>
    </div>
  );
};

export default Home;
