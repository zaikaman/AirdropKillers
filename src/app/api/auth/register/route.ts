import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()

    // Kiểm tra email đã tồn tại
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email đã được sử dụng' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Tạo user mới
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    })

    return NextResponse.json({
      message: 'Đăng ký thành công',
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