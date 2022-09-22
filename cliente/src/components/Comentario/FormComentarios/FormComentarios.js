import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import "./FormComentarios.css"



function FormComentarios () {
  
   const [datos, setDatos] = useState ({usuario:"", comentario:""})

    const URL = "http://localhost:8000/comment/create"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL,datos);
        if (response.status === 201) {
        Swal.fire(
            'Comentario enviado',
        )
        }  
    
        else {
        Swal.fire(
            'Comentario não enviado',
            )

        }
    }
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
            value= {datos.usuario} 
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
         
            </div>
         </div> 
     </div>

   )

  }

export default  FormComentarios;