import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../../context/cartContext";
import "./Menu.css";


function Products  (){
 
  const { AddItemToCart } = useContext(CartContext);

const URL = "http://localhost:8000/products/todos"
const [item, setItem] = useState([])


 const getData = async () => {
  const res = await axios.get(URL)
  setItem(res.data);
}

useEffect(() => {
  getData()
  },[])

  return (
    <div className="productsMenu">
      {item.map(product =>(
          <article key={product._id} className="products">
            <div className="product-info">
            <div className="imgCard"><img src={product.img} alt={product.name} /></div>
              <section className="title-descricao">
                <h2 className="title">{product.name}</h2>
                <h6 className="product-text">{product.description}</h6>
              </section>
              <div className="btn-price">
              <h6 className="price">${product.price}</h6>
              <button className="btn btn-success adicionar" onClick={() => AddItemToCart(product)}>Adicionar</button>
              </div>
            </div>
          </article>
      ))}
    </div>
  );
};

export default Products;