import React from "react";
import styled from "@emotion/styled";

export function Details(props) {
  return (
    <ProductContainer>
      <ProductImageOne src={props.productImage} />
      <ProductImageTow src={props.productImage}/>
      <ProductImageTree src={props.productImage}/>
      <ProductName>{props.productName}</ProductName>
      <ProductPrice>{props.productPrice}</ProductPrice>
      <ProductDescription>{props.children}</ProductDescription>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  background-color: #434343;
  max-width: 80%;
  margin: 40px auto;
`;
const ProductImageOne = styled.img`
  grid-area: 1 / 1 / 4 / 4;
  height: 400px;
  background: cover;
`;
const ProductImageTow = styled.img`
  grid-area: 1 / 4 / 2 / 5;
  height: 170px;
  
`;
const ProductImageTree = styled.img`
  grid-area: 2 / 4 / 3 / 5;
  height: 170px;
`;
const ProductName = styled.h1`
  grid-area: 4 / 1 / 5 / 2;

`;

const ProductPrice = styled.h1`
  grid-area: 4 / 2 / 5 / 3;
`;

const ProductDescription = styled.p`
  grid-area: 5 / 1 / 7 / 4;
`;

// components
