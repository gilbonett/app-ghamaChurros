import axios from 'axios';
import React, {useState, useEffect} from "react"
// import Button from 'react-bootstrap/Button';
import "./CaixaComentarios.css"


function Comentarios () {
  

const [comentario, setComentario] = useState([])


  const cargarComentarios = async () => {
    axios.get('http://localhost:3001/comentarios/')
    .then ((resp) =>{
      setComentario(resp.data)
    }
    )

     useEffect(() => {
      cargarComentarios();
     }, []);

  
return (
<div className='container'>
   {/* <div className= 'row comentarios justify-content-center'>
     <div className='col-6'>
         <form action='' className='form-comentarios d-flex justify-content-end flex-wrap'>
            <textarea 
            placeholder='Comentario'
            type= 'text' 
            value= {comentario.comentario} 
            className="form-control"/>
            <Button as="input" type="button" value="Comentar" />{''}
         </form> */}
            <div className='media-body'>
              {comentario.map((comentario,id)=>
              <>
              <p className='nome'>{comentario.nome}</p>
              <p className='comentario'>{comentario.comentario}</p>
              </>
              )}
              
              {/* <div className='button text-right'>
              <Button variant="outline-secondary">Responder</Button>{' '}
              <Button variant="outline-secondary">Editar</Button>{' '} 
              <Button variant="outline-secondary">Borrar</Button>{' '}  
      
              </div>   
            </div>
         </div> */}
     </div>
   </div>  

  )
}}

export {Comentarios};

