'use client'

import { products } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import SlideIn from '@/components/SlideIn'

export default function Products() {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sản Phẩm Của Chúng Tôi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Các công cụ auto click chất lượng cao cho miniapp Telegram
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <SlideIn 
              key={index}
              direction="up"
              delay={index * 0.3}
            >
              <Link 
                href={`/products/${product.slug}`} 
                className="block bg-dark-light rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <span className="text-gray-400">{product.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
} 