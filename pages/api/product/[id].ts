// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listOfProducts, Product } from '../products'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | string>
) {
   const { id } = req.query
   const product = listOfProducts.find(product => product.id === id)

  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).send("Not Found")
  }
  // res.status(200).json(cart)
}
