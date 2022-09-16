import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="Navbar">
       <img
              src="/assets/logo2.png"
              className="imglogo"
              alt="logo agenda"
            />
      <span className="nav-logo">GhamaChurros</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/Cardapio">Cardapio</a>
        <a href="/Contato">Contato</a>
        <a href="/Comentarios">Comentarios</a>
       </div>
        <Cart/>
      <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>

);

};

export default Navbar;