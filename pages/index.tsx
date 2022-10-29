import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeHeader } from '../components/Header/Header'
import { Product } from '../components/Product'
import styled from '@emotion/styled'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <ProductsContainer>
        <Product
          productPrice="$10"
          productName="Kit-Kat"
          productImage="https://picsum.photos/300/200?random=1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
          sagittis urna. Nulla eu orci placerat, congue magna eu, egestas purus.
          gravida. Etiam maximus metus vel euismod tincidunt.
        </Product>
        <Product
          productPrice="$12"
          productName="Coca-Cola"
          productImage="https://picsum.photos/300/200?random=2"

        >
          This is coca cola
        </Product>
        <Product
          productPrice="$100"
          productName="CousCous"
          productImage="https://picsum.photos/300/200?random=3"
        />
        <Product
          productPrice="$99"
          productName="Iphone"
          productImage="https://picsum.photos/300/200?random=4"
        />
      </ProductsContainer>
    </div>
  )
}

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Home
