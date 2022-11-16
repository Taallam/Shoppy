import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

export function Product(props) {
  return (
   <Link href={`details/${props.id}`}>
    <ProductContainer>
      <ProductImage src={props.productImage} />
      <ProductName>{props.productName}</ProductName>
      <ProductPrice>{props.productPrice}</ProductPrice>
      <ProductDescription>
        {props.children}
      </ProductDescription>
    </ProductContainer>
    </Link>
  )
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 170px 1fr 5fr;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px #a1a1a1;
  width: 300px;
  height: 380px;
  margin: 16px;
  color: #424242;
`
const ProductImage = styled.img`
  grid-column: 1 / 3;
  max-height: 200px;
  margin: auto;
  max-width: 100%;
`
const ProductName = styled.div`
  color: #6b0b3d;
  align-self: center;
  margin-top: 10px;
`

const ProductPrice = styled.div`
  color: #5e35b1;
  align-self: center;
  font-weight: bold;
  justify-self: end;
`

const ProductDescription = styled.p`
  grid-column: 1 / 3;
  overflow: scroll;
`

// components
