import React, { useEffect, useState, useContext } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import CartContext from '../../contexts/cart'

export const HomeHeader = ({
  setSearchTerm,
  searchTerm,
  setAdvancedFiltersVisibility,
  shouldSearch,
  shouldFilter,
  quantity,
}) => {
  const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useContext(CartContext)
  console.log(cart)

  useEffect(() => {
    const totalQuantity = cart.cartItems
      .map(cartItem => cartItem.quantity) // [2,3,4]
      .reduce((acc, quantity) => acc + quantity, 0)
    setCartCount(totalQuantity)
  }, [cart])

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>Shoppy</Logo>
      </Link>
      {shouldSearch && (
        <SearchItemsContainer>
          <div>
            <SearchInput
              type="text"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <SearchButton>Search</SearchButton>
            {shouldFilter && (
              <button onClick={(e) => setAdvancedFiltersVisibility(true)}>
                Filters
              </button>
            )}
          </div>
          {searchTerm !== '' && (
            <SearchingForText>
              You are searching for: {searchTerm}
            </SearchingForText>
          )}
        </SearchItemsContainer>
      )}
      {/* {shouldCard && <Button>{quantity}</Button>} */}
      <div>{cartCount}</div>
    </HeaderContainer>
  )
}
const Button = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: #f10000;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
`
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  padding: 10px 6px;
`

const Logo = styled.h2`
  color: #6b0b3d;
  padding: 4px;
  margin: 0px;
  font-size: 20px;
  cursor: pointer;
`

const SearchInput = styled.input`
  background: #bdbdbd;
  border: none;
  padding: 8px;
  outline: none;
  color: #214823;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  margin: 0px;
  height: 100%;
  font-size: 14px;
  min-width: 300px;
`

const SearchButton = styled.button`
  background-color: #6b0b3d;
  color: #fff;
  padding: 8px;
  border: none;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin: 0px;
  font-size: 14px;
  height: 100%;
`

const SearchItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchingForText = styled.p`
  font-size: 12px;
  font-style: italic;
  margin: 5px 0 0 0;
`
