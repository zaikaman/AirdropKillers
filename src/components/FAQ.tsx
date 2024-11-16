'use client'
import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: 'Tool Auto Click Telegram Là Gì?',
      answer: 'Đây là công cụ giúp tự động hóa các thao tác click trên các miniapp Telegram, giúp bạn tiết kiệm thời gian và công sức khi tham gia các chương trình airdrop.'
    },
    {
      question: 'Tool Hoạt Động Như Thế Nào?',
      answer: 'Tool sẽ tự động nhận diện và thực hiện các thao tác click cần thiết trên miniapp Telegram. Bạn chỉ cần cài đặt tool và để nó hoạt động tự động.'
    },
    {
      question: 'Tool Có An Toàn Để Sử Dụng Không?',
      answer: 'Hoàn toàn an toàn. Tool chỉ thực hiện các thao tác click đơn giản, không can thiệp vào dữ liệu hay thông tin cá nhân của bạn trên Telegram.'
    },
    {
      question: 'Làm Sao Để Cập Nhật Tool?',
      answer: 'Chúng tôi thường xuyên cập nhật tool để tương thích với các miniapp mới. Bạn sẽ được thông báo và hướng dẫn cập nhật qua group Telegram hỗ trợ.'
    },
    {
      question: 'Tôi Có Được Hỗ Trợ Kỹ Thuật Không?',
      answer: 'Có, chúng tôi có group Telegram hỗ trợ kỹ thuật 24/7. Đối với khách hàng VIP, chúng tôi còn có hỗ trợ trực tiếp qua chat riêng.'
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tất cả những điều bạn cần biết về công cụ tự động hóa airdrop của chúng tôi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-dark rounded-lg hover:bg-dark/50 transition-all"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 