import React, { useContext} from "react";
import CartContext from "../../../context/cartContext";
import "./ProductCart.css";



export const ItemCart = ({ product }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);
  

  /* Desestructuramos product */
  const {id} = product;
  return (
    <div className='cartItem'>
      <div className='dataContainer'>
        <div className='left'>
          <p>{product.title}</p>
          <div className='buttons'>
            <button onClick={() => AddItemToCart(product)}>Incluir</button>
            <button onClick={() => DeleteItemToCart(id)}>Retirar</button>
          </div>
        </div>
        <div className='right'>
          <div>{product.amount}</div>
          <p>Total: ${product.amount * product.price}</p>
        </div>
      </div>
    </div>
  );
};