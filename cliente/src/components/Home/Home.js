import React from "react";
import Mercado from "../Mercado/Mercado";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../User/Cadastro";
import LogIN from "../User/Login";
import Pedidos from "../Order/Pedidos";
import Footer from "../Footer/Footer";
import LogOut from "../User/Logout";
import Comentario from "../Comentario/Comentario";


const Home = () => {
  return (
    <div> 
      <Router>
    <Routes>
        <Route path="/" element={<LogIN/>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cardapio" element={<Mercado />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/comentario" element={<Comentario />} />
        <Route path="/contato" element={<Footer/>} />
        <Route path="/logout" element={<LogOut/>} />
    </Routes>
    </Router>
         
    </div>
  );
};

export default Home;
