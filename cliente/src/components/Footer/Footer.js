import React from "react";
import FormComentarios from "../Comentario/FormComentarios/FormComentarios";
import './Footer.css';
import RedeSocial from "./RedeSocial/RedeSocial";

function Footer() {
    return(
        <div className="footer">
        <RedeSocial />
        <FormComentarios />
        </div>
    )
}

export default Footer
