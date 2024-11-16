'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 py-32 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
            Tool Auto Click Telegram Miniapp
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Tự động hóa các thao tác click trên miniapp Telegram. 
            Tiết kiệm thời gian và công sức với công cụ auto click thông minh.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 active:translate-y-0 active:shadow-none transform"
            >
              Mua Tool Ngay
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-all cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0 active:shadow-none transform"
            >
              Xem Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
    </div>
  )
}