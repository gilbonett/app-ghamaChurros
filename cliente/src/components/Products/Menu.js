import React, {useContext} from "react";
import CartContext from "../../context/cartContext";
import { ProductsData } from "../Data";
import "./Menu.css";



const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);

  return (
    <div className="productsMenu">
      {ProductsData.map((product) => {
        const { id, title, descricao, price, img } = product;
        return (
          <article key={id} className="products">
            <div className="product-info">
            <div className="imgCard"><img src={img} alt={title} /></div>
              <section className="title-descricao">
                <h2 className="title">{title}</h2>
                <h6 className="product-text">{descricao}</h6>
              </section>
              <div className="btn-price">
              <h6 className="price">${price}</h6>
              <button className="btn btn-success" onClick={() => AddItemToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </article>

        );
      })}
    </div>
  );
};

export default Products;