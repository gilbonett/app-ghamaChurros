import React from "react";
import "./Navbar.css";

const Navbar = () => {
 
  
  return (
    <div className="Navbar">
       <img   src="/assets/logo2.png"
              className="d-inline-block align-top imglogo"
              alt="logo agenda"
            />
      <div className='nav-items'>
        <a href="/cardapio">Cardapio</a>
        <a href="/pedidos">Orders</a>
        <a href="/comentario">Comentarios</a>
        <a href="/Contato">Contato</a>
       </div>
    </div>

);

};

export default Navbar;