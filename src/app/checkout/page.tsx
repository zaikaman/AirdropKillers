'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, Product } from '@/data/products'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function CheckoutContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [devPassword, setDevPassword] = useState('')
  const [showDevInput, setShowDevInput] = useState(false)
  const searchParams = useSearchParams()
  const productSlug = searchParams?.get('product') || ''
  const product = products.find((p: Product) => p.slug === productSlug)
  const router = useRouter()

  const handlePayment = () => {
    if (!product) return
    
    setIsLoading(true)
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/login'
      return
    }
    window.location.href = `/api/create-payment-link?product=${product.slug}&token=${token}`
  }

  const handleDevGenerate = async () => {
    if (devPassword !== 'Tool17062004') {
      alert('Mật khẩu không đúng')
      return
    }
    
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/login'
      return
    }

    try {
      setIsLoading(true)
      const res = await fetch('/api/tools/generate-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productSlug })
      })

      const data = await res.json()
      
      if (!res.ok) {
        alert(data.error || 'Có lỗi xảy ra')
        return
      }

      // Chuyển hướng sau khi thành công
      window.location.href = '/dashboard'
    } catch (error) {
      alert('Có lỗi xảy ra')
    } finally {
      setIsLoading(false)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Không tìm thấy sản phẩm</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Thanh Toán</h1>
          
          <div className="grid md:grid-cols-5 gap-8">
            {/* Thông tin sản phẩm */}
            <div className="md:col-span-3 bg-dark-light rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="text-gray-400">{product.period}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Chi tiết đơn hàng</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Giá sản phẩm</span>
                    <span>{product.price}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Tổng cộng</span>
                      <span className="text-primary">{product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form thanh toán */}
            <div className="md:col-span-2 bg-dark-light rounded-xl p-6">
              <h3 className="font-bold mb-4">Phương thức thanh toán</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Đang xử lý...' : 'Thanh toán qua PayOS'}
                </button>

                <div className="text-center">
                  <button
                    onClick={() => setShowDevInput(!showDevInput)}
                    className="text-gray-400 text-sm hover:text-gray-300"
                  >
                    {showDevInput ? 'Ẩn' : 'Developer Options'}
                  </button>
                </div>

                {showDevInput && (
                  <div className="space-y-2">
                    <input
                      type="password"
                      value={devPassword}
                      onChange={(e) => setDevPassword(e.target.value)}
                      placeholder="Nhập mật khẩu developer"
                      className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                    />
                    <button
                      onClick={handleDevGenerate}
                      disabled={isLoading}
                      className="w-full py-2 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-all disabled:opacity-50"
                    >
                      Generate Key
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Đang tải...</div>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
} 