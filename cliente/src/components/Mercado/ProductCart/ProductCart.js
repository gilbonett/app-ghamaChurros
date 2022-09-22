import React, { useContext} from "react";
import CartContext from "../../../context/cartContext";
import "./ProductCart.css";

export const ItemCart = ({ product }) => {
  
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);
  

  const {_id} = product;
  return (
    <div className='cartItem'>
      <div className='dataContainer'>
        <div className='left'>
          <p>{product.name}</p>
          <div className='buttons'>
            <button onClick={() => AddItemToCart(product)}>Incluir</button>
            <button onClick={() => DeleteItemToCart(_id)}>Retirar</button>
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