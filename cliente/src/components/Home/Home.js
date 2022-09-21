import React from "react";
import Mercado from "../Mercado/Mercado";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaComentarios from "../Comentario/ListaComentarios";
import Cadastro from "../User/Cadastro";
import LogIN from "../User/Login";
import Pedidos from "../Order/Pedidos";
import Footer from "../Footer/Footer";
import LogOut from "../User/Logout";


const Home = () => {
  return (
    <div> 
      <Router>
    <Routes>
        <Route path="/" element={<LogIN/>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cardapio" element={<Mercado />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/comentario" element={<ListaComentarios />} />
        <Route path="/contato" element={<Footer/>} />
        <Route path="/logout" element={<LogOut/>} />
    </Routes>
    </Router>
         
    </div>
  );
};

export default Home;
