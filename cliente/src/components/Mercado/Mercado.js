import React from "react";
import Cart from "../Mercado/Cart/Cart";
import Products from "../Mercado/Products/Menu";
import "./Mercado.css"

const Mercado = () => {
  return (
    <div className="cep">
          <Cart/>
          <Products/>
    </div>
  );
};

export default Mercado;
