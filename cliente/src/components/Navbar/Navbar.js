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
        <a href="/Cardapio">Cardapio</a>