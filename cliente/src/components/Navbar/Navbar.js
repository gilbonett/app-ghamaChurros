import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="Navbar">
       <img
              src="/assets/logo2.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
      <span className="nav-logo">GhamaChurros</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Mercado</a>
        <a href="/comentario">Comentarios</a>
        <a href="/listorder">Orders</a>
        <a href="/Contato">Contato</a>
       </div>
     
      <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>

);

};

export default Navbar;