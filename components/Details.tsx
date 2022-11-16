import React from "react";
import styled from "@emotion/styled";

export function Details(props) {
  return (
    <ProductContainer>
      <ProductImageOne><Img src={props.productImage} /></ProductImageOne>
      <ProductImageTow><Img src={props.productImage}/></ProductImageTow>
      <ProductImageTree><Img src={props.productImage}/></ProductImageTree>
      <ProductName>{props.productName}</ProductName>
      <ProductPrice>{props.productPrice}</ProductPrice>
      <ProductDescription>{props.children}</ProductDescription>
    </ProductContainer>
  );
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  background-image: cover;
  border-radius: 10px;
`
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  max-width: 80%;
  margin: 40px auto;
`;
const ProductImageOne = styled.div`
  grid-area: 1 / 1 / 4 / 4;
  max-width: 100%;
  background-image: cover;
  
`;
const ProductImageTow = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  max-width: 100%;
  
`;
const ProductImageTree = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  max-width: 100%;
`;
const ProductName = styled.h1`
  grid-area: 4 / 1 / 5 / 2;
  margin: auto 0;
`;

const ProductPrice = styled.h1`
  grid-area: 4 / 2 / 5 / 3;
  margin: auto 0;
  color: #6B0B3D;
  text-align: center;
`;

const ProductDescription = styled.p`
  grid-area: 5 / 1 / 7 / 4;
`;

// components
