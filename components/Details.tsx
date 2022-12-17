import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

type DetailsProps = {
  productImage: string
  productName: string
  productPrice: number
  productQuantity: number
  children: React.ReactNode
  setProductQuantity: (quantity: number) => void
  addToCart: () => void
}

export function Details(props: DetailsProps) {
  return (
    <ProductContainer>
      <ProductImage>
        <Img src={props.productImage} alt="Product Image" />
      </ProductImage>
      <ProductName>{props.productName}</ProductName>
      <ProductPrice>${props.productPrice}</ProductPrice>
      <ProductDescription>{props.children}</ProductDescription>
      <Actions>
        <label>
          <QuantityInput
            type="number"
            min="1"
            max="10"
            placeholder="Quantity"
            value={props.productQuantity}
            onChange={e => props.setProductQuantity(parseInt(e.target.value))}
          ></QuantityInput>
        </label>
        <ProductButton>
          <Link href={'/cart-list/cart'}><Button onClick={props.addToCart}>+ Add to cart</Button></Link>
        </ProductButton>
        <Warning>
          You will buy {props.productQuantity} items with a total of ${props.productQuantity * props.productPrice}
        </Warning>
      </Actions>
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
  display: grid;
  grid-template-columns: 5fr 1fr 2fr;
  grid-template-rows: 1fr 44px 1fr;
  gap: 10px;
`
const ProductImage = styled.div`
  grid-column: 1 / 3;
  grid-row: 1/2;
  max-width: 100%;
  background-image: cover;
`

const ProductName = styled.h1`
  grid-column: 1/2;
  grid-row: 2/3;
  margin: 13px 0;
  height: 60px;
`

const ProductPrice = styled.h1`
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 13px 0;
  color: #6b0b3d;
  text-align: center;
  height: 60px;
`

const ProductDescription = styled.p`
  grid-column: 1/3;
  grid-row: 3/4;
  padding-top: 15px;
`

const QuantityInput = styled.input`
  padding: 10px;
  width: 100%;
`

const Actions = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  padding: 20px 0px;
  max-width: 400px;
`

const Warning = styled.div`
  background-color: #FFF8E1;
  color: #FF6D00;
  border: 1px solid #FF6D00;
  border-radius: 4px;
  padding: 10px;
`

// components
