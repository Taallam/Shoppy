import React from 'react'
import styled from '@emotion/styled'

export function Details(props) {
  return (
    <ProductContainer>
      <div>
        <ProductImage>
          <Img src={props.productImage} />
        </ProductImage>
        <ProductName>{props.productName}</ProductName>
        <ProductPrice>{props.productPrice}</ProductPrice>
        <ProductDescription>{props.children}</ProductDescription>
      </div>
      <ProductButton>
        <Button onClick={props.handleClick} >
          + Add to cart
        </Button>
      </ProductButton>
    </ProductContainer>
  )
}

const Button = styled.button`
  width: 100%;
  height: 50px;
`
const ProductButton = styled.div`
  grid-area: 4 / 3 / 5 / 4;
  margin: 10px 0;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  background-image: cover;
  border-radius: 10px;
`
const ProductContainer = styled.div`
  display: flex;
  /* grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  max-width: 70%;
  margin: 20px auto; */
`
const ProductImage = styled.div`
  grid-area: 1 / 1 / 4 / 4;
  max-width: 100%;
  background-image: cover;
`

const ProductName = styled.h1`
  grid-area: 4 / 1 / 5 / 2;
  margin: 13px 0;
  height: 60px;
`

const ProductPrice = styled.h1`
  grid-area: 4 / 2 / 5 / 3;
  margin: 13px 0;
  color: #6b0b3d;
  text-align: center;
  height: 60px;
`

const ProductDescription = styled.p`
  grid-area: 5 / 1 / 7 / 4;
  margin: -80px 0;
  border-top: 3px solid #ccc;
  padding-top: 15px;
`

// components
