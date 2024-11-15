'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, Product } from '@/data/products'
import Image from 'next/image'

function CheckoutContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [toolKey, setToolKey] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const productSlug = searchParams?.get('product') || ''
  const product = products.find((p: Product) => p.slug === productSlug)

  if (!product) {
    return (
      <div className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Không tìm thấy sản phẩm</div>
        </div>
      </div>
    )
  }

  const handlePaymentConfirm = async () => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
        return
      }

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
        throw new Error(data.error || 'Có lỗi xảy ra')
      }

      setToolKey(data.key)
      setDownloadUrl(data.downloadUrl)
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('Có lỗi xảy ra')
      }
    } finally {
      setIsLoading(false)
    }
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
                  <div className="flex justify-between">
                    <span>Phí dịch vụ</span>
                    <span>0đ</span>
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
                <div className="flex items-center gap-3 p-4 border border-gray-700 rounded-lg cursor-pointer hover:border-primary">
                  <input type="radio" name="payment" id="bank" checked readOnly />
                  <label htmlFor="bank" className="cursor-pointer">
                    <div className="font-medium">Chuyển khoản ngân hàng</div>
                    <div className="text-sm text-gray-400">MB Bank, Vietcombank, ...</div>
                  </label>
                </div>

                <div className="bg-dark/50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <p>Ngân hàng: <span className="font-medium">MB Bank</span></p>
                    <p>Số tài khoản: <span className="font-medium">0123456789</span></p>
                    <p>Chủ tài khoản: <span className="font-medium">NGUYEN VAN A</span></p>
                    <p>Nội dung CK: <span className="font-medium">{product.name.toUpperCase()}_0123</span></p>
                  </div>
                </div>

                {toolKey ? (
                  <div className="mt-8 p-6 bg-dark-light rounded-xl">
                    <h3 className="font-bold mb-4">Thông tin kích hoạt</h3>
                    <div className="space-y-4">
                      <p>Key của bạn: <span className="font-mono font-bold text-primary">{toolKey}</span></p>
                      <p>Link tải tool: <a href={downloadUrl} className="text-primary hover:underline">Nhấn vào đây</a></p>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={handlePaymentConfirm}
                    disabled={isLoading}
                    className="w-full py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all disabled:opacity-50"
                  >
                    {isLoading ? 'Đang xử lý...' : 'Xác nhận đã chuyển khoản'}
                  </button>
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