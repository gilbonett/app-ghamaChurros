import React from "react";
import Cart from "../Cart/Cart";
/* import Footer from "../Footer/Footer";
import IndividualIntervalsHeroImage from "../HeroImage/HeroImage";
import Navbar from "../Navbar/Navbar"; */
import Products from "../Products/Menu";
import "./Home.css"

const Home = () => {
  return (
    <div className="cep">
          <Cart/>
          <Products/>
    </div>
  );
};

export default Home;
