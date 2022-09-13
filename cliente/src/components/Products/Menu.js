import React from "react";
import { ProductsData } from "../Data";
import "./Menu.css";



const Products = () => {
 

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
              <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </article>

        );
      })}
    </div>
  );
};

export default Products;