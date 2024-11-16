import { NextResponse } from 'next/server'
import PayOS from '@payos/node'
import { products } from '@/data/products'

const payOS = new PayOS(
  "589c975c-fbc7-4526-804a-7c876d9629f9",
  "3ff0283c-b2a4-44be-bf35-49e366d59555", 
  "fa6fabf3a3484844cd67a18835689559ee560599d39dbc7876b2b301206a74eb"
)

export async function GET(req: Request) {
  const YOUR_DOMAIN = `https://airdrop-killers.vercel.app`

  try {
    const url = new URL(req.url)
    const productSlug = url.searchParams.get('product')
    
    const product = products.find(p => p.slug === productSlug)
    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 })
    }

    const amount = parseInt(product.price.replace(/\D/g, '')) * 1000

    const body = {
      orderCode: Number(String(Date.now()).slice(-6)),
      amount: amount,
      description: `Thanh toán ${product.name}`,
      items: [
        {
          name: product.name,
          quantity: 1,
          price: amount,
        },
      ],
      returnUrl: `${YOUR_DOMAIN}/checkout/success`,
      cancelUrl: `${YOUR_DOMAIN}/checkout/cancel`,
    }

    const paymentLinkResponse = await payOS.createPaymentLink(body)
    return NextResponse.redirect(paymentLinkResponse.checkoutUrl)
  } catch {
    return NextResponse.json({ message: 'Payment creation failed' }, { status: 500 })
  }
} 