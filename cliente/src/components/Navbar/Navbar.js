import React from "react";
import "./Navbar.css";

const Navbar = () => {
 
  
  return (
    <div className="Navbar">
       <img
              src="/assets/logo2.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
      <span className="nav-logo">GhamaChurros</span>
      <div className='nav-items'>
        <a href="/">Mercado</a>
        <a href="/listorder">Pedidos</a>
        <a href="/Comentarios">Comentarios</a>
        <a href="/Contato">Contato</a>
       </div>
      
    </div>

);

};

export default Navbar;