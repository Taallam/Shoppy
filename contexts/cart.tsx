import { createContext, useState, useEffect } from "react";

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({cartItems: []})

  useEffect(() => {
    fetch('http://localhost:3000/api/cart')
      .then((resp) => resp.json())
      .then((cartItems) => {
        setCart({ cartItems })
      })
  }, [])

  const addItemToCart = ({ productId, quantity }) => {
    fetch(`http://localhost:3000/api/cart/add`, {
      method: "POST",
      body: JSON.stringify({ productId, quantity })
    })
      .then(response => response.json())
      .then(cartItems => setCart({ cartItems }))
  };

  return (
    <CartContext.Provider value={[cart, addItemToCart]}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContext