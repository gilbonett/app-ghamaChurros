import React from "react";
import "./RedeSocial.css"


function RedeSocial () {
    return (
<div className="container-fluid Final">
  <div className="row">
      <div className=" col p-2">
        <div className= 'row justify-content-center'>
           <div  className='form-TextoF'>
              <h1>Contatos</h1>
                <p>Quer entrar em contato com nos?</p>
                <p>Podenos  encontrar nas seguintes redes sociais:</p>
                  <a href="https://www.facebook.com/ghamachurros" className="Logo-red-1">
                  <img src="/assets/Face.webp" width="58" height="58"/></a>

                   <a href="https://instagram.com/ghamachurros?igshid=YmMyMTA2M2Y=" className="Logo-red-2" >
                   <img src="/assets/Instagram.png" width="58" height="58"/></a>

                   <a href="https://linkwhats.app/f27e11" className="Logo-red-3">
                   <img src="/assets/WhatsApp.png" width="58" height="58"/></a>
          </div>
        </div>
      </div>
    </div>
</div>
    );

}
 
export default RedeSocial;


              