import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { json } from "stream/consumers";
import { Details } from "../../components/Details";
import { HomeHeader } from "../../components/Header/Header";
import CartContext from '../../contexts/cart'
import { CartTuple } from "../../contexts/cart"

export const ProductDetails = () => {
  // http://localhost:3000/details/2 => id is 2
  const {
    query: { id },
  } = useRouter();

  const [cart, addItemToCart] = useContext<CartTuple>(CartContext)
  let [product, setProduct] = useState({})
  const [quantity, setquantity] = useState(0);

  useEffect(() => {
    // Get a single product
    if (id) {
      fetch(`http://localhost:3000/api/product/${id}`)
        .then(resp => resp.json())
        .then(product => setProduct(product))
        .catch(error => console.error("The server returned an error!!!"))
    }
  }, [id])

  
  return (
    <div>
      <HomeHeader shouldSearch={false} shouldFilter={false} quantity={quantity}/>
      <Details
        // list={list}
        addToCart={() => addItemToCart({ productId: product.id, quantity })}
        key={product.id}
        productName={product.productName}
        productImage={product.productImage}
        productPrice={product.productPrice ? parseInt(product.productPrice.substring(1)) : 0}
        productQuantity={quantity}
        setProductQuantity={setquantity}
        >
        {product.productDescription}
      <h1>{JSON.stringify(cart)}</h1>
      </Details>
    </div>
  );
};

export default ProductDetails;
