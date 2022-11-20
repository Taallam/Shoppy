// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type CartItem = {
  productId: string,
  quantity: number
}

type Cart = CartItem[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart>
) {
  res.status(200).json(cart)
}


let cart : Cart  = [{ productId: "1", quantity: 5 }, { productId: "2", quantity: 2 }]
