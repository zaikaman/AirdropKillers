import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

function generateRandomPart() {
  return Math.random().toString(36).substring(2, 6).toUpperCase()
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get('authorization')?.split(' ')[1]
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = jwt.verify(token, "airdrop-killers-secret-key") as { userId: string }
    const { productSlug } = await req.json()
    
    if (productSlug !== 'kuroro') {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
    }

    const existingTool = await prisma.tool.findFirst({
      where: {
        userId: decoded.userId,
        name: 'Kuroro'
      }
    })

    if (existingTool) {
      return NextResponse.json({ 
        error: 'Bạn đã có key cho tool này' 
      }, { status: 400 })
    }

    const key = `KURORO-${generateRandomPart()}-${generateRandomPart()}-${generateRandomPart()}`
    
    await prisma.tool.create({
      data: {
        name: 'Kuroro',
        key,
        activated: true,
        userId: decoded.userId
      }
    })

    return NextResponse.json({ 
      key,
      downloadUrl: 'https://drive.google.com/file/d/1cDS3-0JWY8rlu0XM2MsBevYlkqWFxZRG/view?usp=sharing'
    })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
} 