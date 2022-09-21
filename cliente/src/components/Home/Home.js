import React from "react";
import Mercado from "../Mercado/Mercado";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListOrder from "../Order/ListOrder";
import ListaComentarios from "../Comentario/ListaComentarios";
import Cadastro from "../User/Register";


const Home = () => {
  return (
    <div> 
      <Router>
    <Routes>
        <Route path="/registro" element={<Cadastro />} />
        <Route path="/" element={<Mercado />} />
        <Route path="/listorder" element={<ListOrder />} />
        <Route path="/comentario" element={<ListaComentarios />} />
    </Routes>
    </Router>
         
    </div>
  );
};

export default Home;
