import { NextResponse } from 'next/server'
import PayOS from '@payos/node'
import { products } from '@/data/products'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const payOS = new PayOS(
  "589c975c-fbc7-4526-804a-7c876d9629f9",
  "3ff0283c-b2a4-44be-bf35-49e366d59555", 
  "fa6fabf3a3484844cd67a18835689559ee560599d39dbc7876b2b301206a74eb"
)

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const YOUR_DOMAIN = `https://airdrop-killers.vercel.app`

  try {
    const url = new URL(req.url)
    const token = url.searchParams.get('token')
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Decode token to get user email
    const decoded = jwt.verify(token, "airdrop-killers-secret-key") as { userId: string }
    
    // Get user email from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    })
    
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const productSlug = url.searchParams.get('product')
    const product = products.find(p => p.slug === productSlug)
    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 })
    }

    const amount = parseInt(product.price.replace(/\D/g, ''))
    console.log('Amount before PayOS:', amount)
    
    const body = {
      orderCode: Number(String(Date.now()).slice(-6)),
      amount: amount,
      description: `${product.slug} ${user.email}`,
      items: [
        {
          name: product.name,
          quantity: 1,
          price: amount,
        },
      ],
      returnUrl: `${YOUR_DOMAIN}/checkout/success?product=${productSlug}`,
      cancelUrl: `${YOUR_DOMAIN}/checkout/cancel?product=${productSlug}`,
    }

    console.log('PayOS request body:', body)

    try {
      const paymentLinkResponse = await payOS.createPaymentLink(body)
      console.log('PayOS response:', paymentLinkResponse)
      return NextResponse.redirect(paymentLinkResponse.checkoutUrl)
    } catch (error: unknown) {
      const payosError = error as {
        message: string;
        response?: {
          data: unknown;
          status: number;
        };
      }
      
      console.error('PayOS error:', {
        message: payosError.message,
        response: payosError.response?.data,
        status: payosError.response?.status,
      })
      
      return NextResponse.json({ 
        message: 'PayOS payment creation failed',
        error: {
          message: payosError.message,
          response: payosError.response?.data,
        }
      }, { status: 500 })
    }
  } catch (error: unknown) {
    const serverError = error as Error
    console.error('Server error:', {
      message: serverError.message,
      stack: serverError.stack
    })
    
    return NextResponse.json({ 
      message: 'Server error',
      error: serverError.message
    }, { status: 500 })
  }
} 