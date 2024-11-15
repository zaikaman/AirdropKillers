import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    // Tìm user
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Email không tồn tại' },
        { status: 400 }
      )
    }

    // Kiểm tra password
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return NextResponse.json(
        { error: 'Mật khẩu không đúng' },
        { status: 400 }
      )
    }

    // Tạo JWT token
    const token = jwt.sign(
      { userId: user.id },
      "airdrop-killers-secret-key",
      { expiresIn: '7d' }
    )

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    })
  } catch {
    return NextResponse.json(
      { error: 'Đã có lỗi xảy ra' },
      { status: 500 }
    )
  }
} 