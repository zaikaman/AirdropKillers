'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutSuccessPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    // Get product from URL params
    const urlParams = new URLSearchParams(window.location.search)
    const productSlug = urlParams.get('product')
    
    if (!productSlug) {
      setError('Không tìm thấy thông tin sản phẩm')
      setIsLoading(false)
      return
    }

    // Generate tool key
    fetch('/api/tools/generate-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ productSlug })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          // Redirect to dashboard to see the key
          router.push('/dashboard')
        }
      })
      .catch(() => {
        setError('Có lỗi xảy ra')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Đang xử lý...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    )
  }

  return null
} 