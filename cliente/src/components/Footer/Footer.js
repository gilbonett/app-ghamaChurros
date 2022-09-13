import React from "react";
<<<<<<< HEAD
import { Comentarios } from "../CaixaComentario/CaixaComentarios";
=======
import { Comentarios } from "./CaixaComentario/CaixaComentarios";
>>>>>>> e1a28eb374a4704f27bcdc898465b28eb4c47b69
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
