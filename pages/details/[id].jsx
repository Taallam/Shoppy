import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Details } from "../../components/Details";
import { HomeHeader } from "../../components/Header/Header";

const listOfProducts = [
  {
    id: "1",
    productPrice: "$10",
    productName: "Kit-Kat",
    productImageOne: "https://picsum.photos/300/200?random=1",
    productImageTow: "https://picsum.photos/300/200?random=1.1",
    productImageTree: "https://picsum.photos/300/200?random=1.2",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac",
  },
  {
    id: "2",
    productPrice: "$23",
    productName: "Coca-cola",
    productImageOne: "https://picsum.photos/300/200?random=2",
    productImageTow: "https://picsum.photos/300/200?random=2.1",
    productImageTree: "https://picsum.photos/300/200?random=2.2",
    productDescription: "sagittis urna. Nulla eu orci placerat, congue magna eu, egestas purus.",
  },
  {
    id: "3",
    productPrice: "$99",
    productName: "Noodles",
    productImageOne: "https://picsum.photos/300/200?random=3",
    productImageTow: "https://picsum.photos/300/200?random=3.1",
    productImageTree: "https://picsum.photos/300/200?random=3.2",
    productDescription: "Vivamus ullamcorper sed enim eget tincidunt. Aliquam blandit condimentum",
  },
  {
    id: "4",
    productPrice: "$30",
    productName: "Chips",
    productImageOne: "https://picsum.photos/300/200?random=4",
    productImageTow: "https://picsum.photos/300/200?random=4.1",
    productImageTree: "https://picsum.photos/300/200?random=4.2",
    productDescription: "This is a good chips",
  },
];

export const Deatils = () => {
  const {
    query: { id },
  } = useRouter();
  const list = listOfProducts.find((product) => product.id == id);
  const [cart, setCart] = useState([]);
  const [quantity, setquantity] = useState(0);
  const handleClick = (list) => {
    cart.push(list);
    quantity = cart.length;
  };
  return (
    <div>
      <HomeHeader shouldSearch={false} shouldFilter={false} quantity={quantity} shouldCard={true} />
      <Details
        list={list}
        handleClick={handleClick}
        key={list.id}
        productName={list.productName}
        productImageTree={list.productImageTree}
        productImageTow={list.productImageTow}
        productImageOne={list.productImageOne}
        productPrice={list.productPrice}
      >
        {list.productDescription}
      </Details>
    </div>
  );
};

export default Deatils;
