import React from "react";
import Mercado from "../Mercado/Mercado";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListOrder from "../Order/ListOrder";


const Home = () => {
  return (
    <div> 
      <Router>
    <Routes>
        <Route path="/" element={<Mercado />} />
        <Route path="/listorder" element={<ListOrder />} />
    </Routes>
    </Router>
         
    </div>
  );
};

export default Home;
