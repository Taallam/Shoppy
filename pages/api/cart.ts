// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type CartItem = {
  productId: string,
  quantity: number,
  productName: string
  productImage: string
  productPrice: string
}

export type Cart = CartItem[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart>
) {
  res.status(200).json(cart)
}


export let cart : Cart  = []
