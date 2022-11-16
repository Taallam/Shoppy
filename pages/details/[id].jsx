import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Details } from "../../components/Details";
import { HomeHeader } from '../../components/Header/Header'

const listOfProducts = [
  {
    id: "1",
    productPrice: "$10",
    productName: "Kit-Kat",
    productImage: "https://picsum.photos/300/200?random=1",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac",
  },
  {
    id: "2",
    productPrice: "$23",
    productName: "Coca-cola",
    productImage: "https://picsum.photos/300/200?random=2",
    productDescription: "sagittis urna. Nulla eu orci placerat, congue magna eu, egestas purus.",
  },
  {
    id: "3",
    productPrice: "$99",
    productName: "Noodles",
    productImage: "https://picsum.photos/300/200?random=3",
    productDescription: "Vivamus ullamcorper sed enim eget tincidunt. Aliquam blandit condimentum",
  },
  {
    id: "4",
    productPrice: "$30",
    productName: "Chips",
    productImage: "https://picsum.photos/300/200?random=4",
    productDescription: "This is a good chips",
  },
];

export const Deatils = () => {
  const {
    query:  {id} ,
  } = useRouter();
  const list = listOfProducts.find((product) =>  product.id == id);
  return (
    <div>
    <HomeHeader shouldSearch={false} shouldFilter={false}/>
    <Details key={list.id} productName={list.productName} productImage={list.productImage} productPrice={list.productPrice}>
        {list.productDescription}
    </Details>
    </div>
  );
};

export default Deatils;
