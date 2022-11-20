import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Details } from "../../components/Details";
import { HomeHeader } from "../../components/Header/Header";

export const ProductDetails = () => {
  // http://localhost:3000/details/2 => id is 2
  const {
    query: { id },
  } = useRouter();

  let [product, setProduct] = useState({})

  useEffect(() => {
    // Get a single product
    if (id) {
      fetch(`http://localhost:3000/api/product/${id}`)
        .then(resp => resp.json())
        .then(product => setProduct(product))
        .catch(error => console.error("The server returned an error!!!"))
    }
  }, [id])

  const [cart, setCart] = useState([]);
  const [quantity, setquantity] = useState(0);
  const handleClick = () => {
    fetch(`http://localhost:3000/api/cart/add`, {
      method: "POST",
      body: JSON.stringify({
        productId: id,
        quantity: 1
      })
    })
  };
  return (
    <div>
      <HomeHeader shouldSearch={false} shouldFilter={false} quantity={quantity}/>
      <Details
        // list={list}
        handleClick={handleClick}
        key={product.id}
        productName={product.productName}
        productImage={product.productImage}
        productPrice={product.productPrice}
      >
        {product.productDescription}
      </Details>
    </div>
  );
};

export default ProductDetails;
