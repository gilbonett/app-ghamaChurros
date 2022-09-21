import React from "react";
import Mercado from "../Mercado/Mercado";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListOrder from "../Order/ListOrder";
import ListaComentarios from "../Comentario/ListaComentarios";
import Cadastro from "../User/Cadastro";
import LogIN from "../User/Login";


const Home = () => {
  return (
    <div> 
      <Router>
    <Routes>
        <Route path="/" element={<LogIN/>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cardapio" element={<Mercado />} />
        <Route path="/listorder" element={<ListOrder />} />
        <Route path="/comentario" element={<ListaComentarios />} />
    </Routes>
    </Router>
         
    </div>
  );
};

export default Home;
