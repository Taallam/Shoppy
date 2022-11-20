// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { cart, Cart } from '../cart'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart>
) {
  if (req.method === "POST") {
    const { productId, quantity } = JSON.parse(req.body)
    // Check if the productId already exists in the cart
    // Don't add it or increase the quantity
    cart.push({ productId, quantity })

    // Return errors
    res.status(200).json(cart)
  }
}
