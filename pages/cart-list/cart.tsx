import React, { useContext, useState } from "react";
import { HomeHeader } from "../../components/Header/Header";
import CartContext from "../../contexts/cart";
import styled from "@emotion/styled";

const Cart = () => {
  const [cart] = useContext(CartContext);
  const [visibility, setVisibility] = useState(true);

  const deleteItem = () => {
    setVisibility(false);
  };
  return (
    <div>
      <HomeHeader shouldSearch={false} shouldFilter={false} quantity={1} />
      {cart.cartItems.map((e) => {
        if (!visibility) {
          return <div key={e.productId} />;
        } else {
          return (
            <CartItem key={e.productId}>
              <Img src={e.productImage} />
              <h2>product Name : {e.productName}</h2>
              <h2>product quantity : {e.quantity}</h2>
              <h2>product price : {parseInt(e.productPrice.replace(/\D/g, "")) * e.quantity}$ </h2>
              <Button onClick={deleteItem}>x</Button>
            </CartItem>
          );
        }
      })}
    </div>
  );
};

const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 90px;
  background-color: #dadada;
  border-radius: 10px;
  margin: 10px auto;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
`;
const Button = styled.button`
  background-color: #ff2525;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  font-size: 26px;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

export default Cart;
