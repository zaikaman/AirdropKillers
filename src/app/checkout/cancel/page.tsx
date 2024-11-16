'use client'

import { useRouter } from 'next/navigation'

export default function CheckoutCancelPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Thanh Toán Thất Bại</h1>
          <p className="text-gray-400 mb-8">
            Bạn đã hủy thanh toán. Vui lòng thử lại hoặc liên hệ admin nếu cần hỗ trợ.
          </p>
          
          <div className="space-x-4">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all"
            >
              Thử Lại
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-all"
            >
              Liên Hệ Hỗ Trợ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 