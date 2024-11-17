import SlideIn from '@/components/SlideIn'

export default function FeaturesPage() {
  const features = [
    {
      title: 'Giao Diện Đơn Giản',
      description: 'Thiết kế tối giản, dễ sử dụng chỉ với vài thao tác click chuột',
      icon: '🎯',
      details: [
        'Giao diện trực quan, dễ hiểu',
        'Không cần cấu hình phức tạp',
        'Chạy ngay sau khi mở tool',
        'Phù hợp với mọi người dùng'
      ]
    },
    {
      title: 'Auto Click Chính Xác',
      description: 'Tự động click chính xác vào các nút bấm trên miniapp Telegram',
      icon: '🖱️',
      details: [
        'Click đúng vị trí nút bấm',
        'Hoạt động ổn định',
        'Không gây lag máy',
        'Dễ dàng bật/tắt'
      ]
    },
    {
      title: 'Hỗ Trợ Nhiều Miniapp',
      description: 'Tương thích với các miniapp phổ biến trên Telegram',
      icon: '📱',
      details: [
        'Cập nhật theo miniapp mới',
        'Hoạt động ổn định',
        'Tương thích tốt',
        'Không gây lỗi app'
      ]
    },
    {
      title: 'Cập Nhật Thường Xuyên',
      description: 'Liên tục cập nhật để đảm bảo tool hoạt động tốt nhất',
      icon: '🔄',
      details: [
        'Cập nhật miễn phí',
        'Thông báo qua channel',
        'Sửa lỗi nhanh chóng',
        'Hỗ trợ kịp thời'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-dark pt-20 pb-20">
      <div className="container mx-auto px-4 py-20 overflow-visible">
        <SlideIn>
          <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Tool Auto Click
          </h1>
          
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Tool auto click đơn giản, hiệu quả, dễ sử dụng cho mọi người dùng
          </p>
        </SlideIn>

        <SlideIn direction="up" delay={0.3}>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto pb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-dark-light rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 mb-4"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out ${index * 0.15}s forwards`
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SlideIn>
      </div>
    </div>
  )
} 