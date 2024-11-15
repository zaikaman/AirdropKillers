import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { key, hardwareId } = await req.json()

    const tool = await prisma.tool.findUnique({
      where: { key }
    })

    if (!tool) {
      return NextResponse.json({ error: 'Invalid key' }, { status: 400 })
    }

    if (tool.hardwareId && tool.hardwareId !== hardwareId) {
      return NextResponse.json({ error: 'Key already used on another device' }, { status: 400 }) 
    }

    if (!tool.hardwareId) {
      await prisma.tool.update({
        where: { key },
        data: { hardwareId }
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
} 