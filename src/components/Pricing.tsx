export default function Pricing() {
  const plans = [
    {
      name: 'Cơ Bản',
      price: '200.000đ',
      period: '/tháng',
      features: [
        'Auto click cơ bản',
        'Hỗ trợ mọi miniapp trên website',
        'Cập nhật 1 tháng',
        'Hỗ trợ qua group'
      ],
      recommended: false
    },
    {
      name: 'Phổ Biến',
      price: '500.000đ',
      period: '/tháng',
      features: [
        'Auto click nâng cao',
        'Hỗ trợ mọi miniapp trên website',
        'Cập nhật 3 tháng',
        'Hỗ trợ trực tiếp',
        'Video hướng dẫn'
      ],
      recommended: true
    },
    {
      name: 'VIP',
      price: '1.000.000đ',
      period: '/tháng',
      features: [
        'Auto click không giới hạn',
        'Hỗ trợ mọi miniapp trên website',
        'Cập nhật vĩnh viễn',
        'Hỗ trợ 24/7',
        'Tùy chỉnh theo yêu cầu',
        'Ưu tiên cập nhật mới'
      ],
      recommended: false
    }
  ]

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Bảng Giá Đơn Giản, Minh Bạch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chọn gói phù hợp với nhu cầu auto click của bạn
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl ${
                plan.recommended 
                  ? 'bg-primary/10 border-2 border-primary' 
                  : 'bg-dark border border-gray-800'
              }`}
            >
              {plan.recommended && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Recommended
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="flex items-baseline mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 mt-8 rounded-lg font-medium transition-all ${
                plan.recommended 
                  ? 'bg-primary hover:bg-primary-dark text-white'
                  : 'border border-primary text-primary hover:bg-primary/10'
              }`}>
                Bắt Đầu Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 