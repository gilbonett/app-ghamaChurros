import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../../context/cartContext";
//import { ProductsData } from "../Data";
import "./Menu.css";


function Products  (){
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);

const URL = "http://localhost:8000/products/todos"
const [item, setItem] = useState([])

useEffect(() => {
  axios.get(URL).then(res =>{
    console.log(res.data.products)
  }).catch(err => {
    console.log (err)
  })
}, []);



//Mapear list de usuarios



/* const getData = async () => {
  const response = await axios.get(URL);
  return console.log(response);
}


useEffect(() => {
  getData().then((response) => {
      setItem(response.data);
  })
},[setItem])
  */

  return (
    <div className="productsMenu">
      {item.map((products , _id) => {
        return (
          <article key={_id} className="products">
            <div className="product-info">
            <div className="imgCard"><img src={products.img} alt={products.name} /></div>
              <section className="title-descricao">
                <h2 className="title">{products.name}</h2>
                <h6 className="product-text">{products.description}</h6>
              </section>
              <div className="btn-price">
              <h6 className="price">${products.price}</h6>
              <button className="btn btn-success adicionar" onClick={() => AddItemToCart(products)}>Adicionar</button>
              </div>
            </div>
          </article>

        );
      })}
    </div>
  );
};

export default Products;