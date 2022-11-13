import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeHeader } from '../components/Header/Header'
import { Product } from '../components/Product'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import AdvancedFilters from '../components/AdvancedFilters'

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState(listOfProducts)
  const [advancedFiltersVisibility, setAdvancedFiltersVisibility] = useState(
    false,
  )
  const [filterPriceFrom, setFilterPriceFrom] = useState('')
  const [filterPriceTo, setFilterPriceTo] = useState('')

  useEffect(() => {
    const newProducts = listOfProducts.filter((product) =>
      product.productName.includes(searchTerm),
    )
    setProducts(newProducts)
  }, [searchTerm])

  useEffect(() => {
    const newProducts = listOfProducts.filter((product) => {
      // If both filters are empty, returns true -> show the product
      const productPrice = parseInt(product.productPrice.slice(1))
      const priceTo = parseInt(filterPriceTo)
      const priceFrom = parseInt(filterPriceFrom)

      if (filterPriceFrom === "" && filterPriceTo === "") {
        return true
      } else if (filterPriceFrom === "") {
        return productPrice <= priceTo 
      } else if(filterPriceTo === "") {
        return priceFrom <= productPrice 
      } else {
        return priceFrom <= productPrice && productPrice <= priceTo 
      }
    })

    setProducts(newProducts)
  }, [filterPriceFrom, filterPriceTo])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setAdvancedFiltersVisibility={setAdvancedFiltersVisibility}
      />
      <IndexContents>
        <ProductsContainer>
          {products.map((product) => (
            <Product
              key={product.key}
              productPrice={product.productPrice}
              productName={product.productName}
              productImage={product.productImage}
            >
              {product.productDescription}
            </Product>
          ))}
        </ProductsContainer>
        <AdvancedFilters
          visible={advancedFiltersVisibility}
          setAdvancedFiltersVisibility={setAdvancedFiltersVisibility}
          priceFrom={filterPriceFrom}
          priceTo={filterPriceTo}
          setPriceFrom={setFilterPriceFrom}
          setPriceTo={setFilterPriceTo}
        />
      </IndexContents>
    </div>
  )
}

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IndexContents = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
`

const listOfProducts = [
  {
    key: '1',
    productPrice: '$10',
    productName: 'Kit-Kat',
    productImage: 'https://picsum.photos/300/200?random=1',
    productDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac',
  },
  {
    key: '2',
    productPrice: '$23',
    productName: 'Coca-cola',
    productImage: 'https://picsum.photos/300/200?random=2',
    productDescription:
      'sagittis urna. Nulla eu orci placerat, congue magna eu, egestas purus.',
  },
  {
    key: '3',
    productPrice: '$99',
    productName: 'Noodles',
    productImage: 'https://picsum.photos/300/200?random=3',
    productDescription:
      'Vivamus ullamcorper sed enim eget tincidunt. Aliquam blandit condimentum',
  },
  {
    key: '4',
    productPrice: '$30',
    productName: 'Chips',
    productImage: 'https://picsum.photos/300/200?random=4',
    productDescription: 'This is a good chips',
  },
]

export default Home
