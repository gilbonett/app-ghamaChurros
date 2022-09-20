import React, {useEffect, useState} from "react"
import axios from 'axios';
import { Container, Table } from "react-bootstrap";

 function ListaComentarios(){
  const [comentario, setComentarios] = useState ([])

  const cargarComentarios = async () => { 
    axios.get('http://localhost:3000/comentario') 
   .then((res)=> {
    setComentarios(res.data);
   })
 };

 useEffect(() => {
    cargarComentarios()
  }, []);

  return (
    <div>
        <Container className="text-center">
            <br />
            <h1>Comentarios</h1>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Cliente</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    {
comentario.map((comentario, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{comentario.nome}</td>
                                <td>{comentario.comentario}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    </div>
); 




}

export default ListaComentarios;