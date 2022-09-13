import React from "react";
import { Comentarios } from "../CaixaComentario/CaixaComentarios";
import './Footer.css';

function Footer() {
    return(
        <div className="footer">
          {/* Aqui van los Componentes CaixaComentario e RedesSocias */}
          <Comentarios/>
        </div>
    )
}

export default Footer
