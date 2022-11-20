// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  id: string,
  productPrice: string,
  productName: string,
  productImage: string,
  productDescription: string,
}

type ProductsResponse = Product[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsResponse>
) {
  res.status(200).json(listOfProducts)
}

const listOfProducts = [
  {
    id: "1",
    productPrice: "$15",
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
]