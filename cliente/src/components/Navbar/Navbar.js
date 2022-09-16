import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [busqueda, setBusqueda]= useState("");

  const handleChange=e=>{
    setBusqueda(e.target.value);
}

  return (
    <div className="Navbar">
      <span className="nav-logo">GhamaChurros</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/Cardapio">Cardapio</a>n
        <a href="/Contato">Contato</a>
        <a href="/Comentarios">Comentarios</a>
       </div>
     
       <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Busqueda"
          onChange={handleChange}
        />
        <button className="btn btn-succes">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
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