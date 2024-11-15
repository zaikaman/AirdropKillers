import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

export async function GET(req: Request) {
  try {
    const token = req.headers.get('authorization')?.split(' ')[1]
    
    if (!token) {
      return NextResponse.json(
        { error: 'Token không hợp lệ' },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(token, "airdrop-killers-secret-key") as { userId: string }
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        tools: true
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Người dùng không tồn tại' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        tools: user.tools
      } 
    })
  } catch {
    return NextResponse.json(
      { error: 'Token không hợp lệ' },
      { status: 401 }
    )
  }
} 