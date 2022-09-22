import { createContext, useEffect, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]) 
 

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cartProducts"));
    setCartItems(cart);
}, []);
  

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);


  const AddItemToCart = (product) => {

    const inCart = cartItems.find(
      (productInCart) => productInCart._id === product._id
    );


    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart._id === product._id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );

    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const DeleteItemToCart = (productId) => {
 
    const inCart = cartItems.find(
      (productInCart) => productInCart._id === productId
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== productId)
      );
    } else {
    
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart._id === productId) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  return (
   
    <CartContext.Provider
      value={{ cartItems, AddItemToCart, DeleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
