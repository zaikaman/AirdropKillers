'use client'

import SlideIn from '@/components/SlideIn'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Nguyễn Văn An',
      role: 'Trader Tiền Mã Hóa',
      image: '/anonymous.png',
      content: 'Công cụ này đã hoàn toàn thay đổi cách tôi tham gia airdrop. Các tính năng tự động hóa thật đáng kinh ngạc!',
      rating: 5
    },
    {
      name: 'Trần Thị Bình',
      role: 'Nhà Phát Triển DeFi',
      image: '/anonymous.png',
      content: 'Hệ thống quản lý đa ví là một bước đột phá. Tiết kiệm cho tôi vô số giờ làm việc thủ công.',
      rating: 5
    },
    {
      name: 'Lê Minh Thiện',
      role: 'Chuyên Gia Blockchain',
      image: '/anonymous.png',
      content: 'Khoản đầu tư tốt nhất cho việc săn airdrop. Công cụ phân tích giúp tôi theo dõi mọi thứ hiệu quả.',
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Người Dùng Nói Gì</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tham gia cùng hàng nghìn người dùng hài lòng đã thay đổi chiến lược airdrop của họ
            </p>
          </div>
        </SlideIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideIn 
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <div className="bg-dark-light p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
} 