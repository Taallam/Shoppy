import { createContext, useState, useEffect } from "react";


type CartProviderProps = {
  children: React.ReactNode
}

type CartItem = {
  productId: string,
  quantity: number,
  productName: string
  productImage: string
  productPrice: string
}

type Cart = { cartItems: CartItem[] }
export type CartTuple = [Cart, (cartItem: CartItem) => void]

const emptyCart = { cartItems: []}
const CartContext = createContext<CartTuple>([emptyCart, () => {}])

export const CartProvider = ({ children } : CartProviderProps) => {
  const [cart, setCart] = useState<Cart>(emptyCart)

  useEffect(() => {
    fetch('http://localhost:3000/api/cart')
      .then((resp) => resp.json())
      .then((cartItems) => {
        setCart({ cartItems })
      })
  }, [])

  const addItemToCart = ({ productId, quantity, productName, productImage, productPrice} : CartItem) => {
    fetch(`http://localhost:3000/api/cart/add`, {
      method: "POST",
      body: JSON.stringify({ productId, quantity, productName, productImage, productPrice})
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