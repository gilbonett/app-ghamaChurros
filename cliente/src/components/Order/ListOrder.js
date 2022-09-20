import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

export default function ListOrder() {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/order").then((res) => {
            setOrder(res.data);
        });
    }, []);
  
    return (
        <div>
            <Container className="text-center">
                <br />
                <h1>Orden de Pedidos</h1>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Pedido.Nr</th>
                            <th>Produtos</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((order, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{order.produtos}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.total +  "R$"} </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
