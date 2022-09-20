import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import "./CaixaComentarios.css"


function Comentarios () {
  
   
   const [datos, setDatos] = useState ({nome:"", comentario:""})

   

   
    const URL = "http://localhost:3000/comentario"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,datos);
        if (response.status === 201) {
        Swal.fire(
            'Comentario enviado',
        );
     
        }}

        const handleChange = ({target}) => {
            setDatos({
                ...datos,
                [target.name]: target.value
            })
        }

return (
  
<div className='container'>
    <div className= 'row comentarios'>
     <div className='col-5'>
         <form  action=""   className='form-comentarios d-flex justify-content-end flex-wrap' onSubmit={handleSubmit}>
         <input 
            name="nome"
            placeholder='Nome'
            onChange={handleChange}
            type= 'text' 
            value= {datos.nome} 
            className="form-control mb-3"
            required
            />
          
            <textarea 
            name="comentario"
            placeholder='Comentario'
            onChange={handleChange}
            type= 'text'
            value= {datos.comentario} 
            className="form-control mb-4"
            required
            />
            <Button as="input" type= "submit" value="Comentar" />
         </form> 
         <div className='media-body'>
              {comentario.map((comentario, id)=> 
              <>
              <p key={comentario.id}></p>
              <p className='nome'>{comentario.nome}</p>
              <p className='comentario'>{comentario.comentario}</p>
              </>
              )}
              
              </div> 
            </div>
         </div> 
     </div>

   )

  }

export {Comentarios};