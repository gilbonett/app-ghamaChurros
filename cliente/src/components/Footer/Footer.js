import React from "react";
import './Footer.css';
import {Comentarios} from "./CaixaComentario/CaixaComentarios"
import RedeSocial from "./RedeSocial/RedeSocial";

function Footer() {
    return(
        <div className="footer">
        <Comentarios/>
        <RedeSocial/>
        </div>
    )
}

export default Footer
