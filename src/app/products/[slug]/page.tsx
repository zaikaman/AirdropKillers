'use client'

import { useParams } from 'next/navigation'
import { products, Product } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'

type Params = {
  [key: string]: string | string[]
}

export default function ProductDetailPage() {
  const params = useParams() as Params
  const slug = params.slug as string
  const product = products.find((p: Product) => p.slug === slug)

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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <span className="text-gray-400">{product.period}</span>
              </div>
              
              <p className="text-gray-300 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Tính năng</h2>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {product.details && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Tổng quan</h2>
                    <p className="text-gray-300">{product.details.overview}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Yêu cầu hệ thống</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {product.details.requirements?.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Hướng dẫn cài đặt</h2>
                    <ul className="list-decimal list-inside space-y-2 text-gray-300">
                      {product.details.installation?.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Cách sử dụng</h2>
                    <ul className="list-decimal list-inside space-y-2 text-gray-300">
                      {product.details.usage?.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <Link 
                href={`/checkout?product=${product.slug}`}
                className="block w-full py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all text-center mt-8"
              >
                Mua Ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 