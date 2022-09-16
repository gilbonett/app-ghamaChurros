import React, {useState, useEffect} from "react"
import Button from 'react-bootstrap/Button'; 
import "./CaixaComentarios.css"


function Comentarios () {
  

const [comentario, setComentario] = useState([])


    function cargarComentarios() {
    fetch ('http://localhost:3000/comentario/')
    .then ((res) => res.json () )
    .then (data => setComentario (data) );
    };

     useEffect(() => {
      cargarComentarios();
     }, []);

  
return (
  
<div className='container'>
    <div className= 'row comentarios'>
     <div className='col-5'>
         <form action='' className='form-comentarios d-flex justify-content-end flex-wrap'>
         <input 
            placeholder='Nome'
            type= 'text' 
            value= {comentario.nome} 
            className="form-control mb-3"/>
          
            <textarea 
            placeholder='Comentario'
            type= 'text' 
            value= {comentario.comentario} 
            className="form-control mb-4"/>
            <Button as="input" type="button" value="Comentar" />{''}
         </form> 

         <div className='button text-right'>
              <Button variant="outline-secondary">Editar</Button>{' '} 
              <Button variant="outline-secondary">Borrar</Button>{' '}  

            <div className='media-body'>
              {comentario.map((comentario,id)=>
              <>
              <p key={id}></p>
              <p className='nome'>{comentario.nome}</p>
              <p className='comentario'>{comentario.comentario}</p>
              </>
              )}
              
              </div>   
            </div>
         </div> 
     </div>
   </div>  

  )
}

export {Comentarios};