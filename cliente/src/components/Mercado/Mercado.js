import React from "react";
import FormComentarios from "../Comentario/FormComentarios/FormComentarios";
import IndividualIntervalsHeroImage from "../HeroImage/HeroImage";
import Cart from "../Mercado/Cart/Cart";
import Products from "../Mercado/Products/Menu";
import Navbar from "../Navbar/Navbar";
import "./Mercado.css"

const Mercado = () => {
  return (
    <>
    <Navbar/>
    <IndividualIntervalsHeroImage/>
    <div className="loja">
          <Cart/>
          <Products/>
    </div>
    <FormComentarios/>
    </>
    
  );
};

export default Mercado;
