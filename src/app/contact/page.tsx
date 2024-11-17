'use client'

import SlideIn from '@/components/SlideIn'

interface ContactChannel {
  title: string
  description: string
  url: string
  username: string
  icon: string
}

export default function ContactPage() {
  const contactChannels: ContactChannel[] = [
    {
      title: 'Kênh Thông Báo',
      description: 'Cập nhật mới nhất về tool và hướng dẫn sử dụng',
      url: 'https://t.me/airdropkillersann',
      username: '@airdropkillersann',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-6h-2v6zm0-8h2V8h-2v2z'
    },
    {
      title: 'Group Chat Cộng Đồng',
      description: 'Trao đổi, hỗ trợ và chia sẻ kinh nghiệm',
      url: 'https://t.me/airdropkillerschat',
      username: '@airdropkillerschat',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-6h-2v6zm0-8h2V8h-2v2z'
    }
  ]

  return (
    <div className="min-h-screen bg-dark pt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <SlideIn>
            <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Liên Hệ Với Chúng Tôi
            </h1>
          </SlideIn>

          <div className="bg-dark-light rounded-xl p-8 mb-8">
            <SlideIn delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">Kênh Liên Lạc Chính Thức</h2>
            </SlideIn>
            
            <div className="space-y-6">
              {contactChannels.map((channel, index) => (
                <SlideIn
                  key={index}
                  direction="left"
                  delay={0.3 + index * 0.2}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d={channel.icon}/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{channel.title}</h3>
                      <p className="text-gray-400 mb-2">{channel.description}</p>
                      <a href={channel.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {channel.username}
                      </a>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>

          <SlideIn direction="up" delay={0.8}>
            <div className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Lưu Ý Quan Trọng</h2>
              <div className="space-y-4 text-gray-300">
                <p>⚠️ Airdrop Killers chỉ có duy nhất 2 kênh liên lạc chính thức trên Telegram như trên.</p>
                <p>⚠️ Chúng tôi không có số điện thoại hay hotline hỗ trợ.</p>
                <p>⚠️ Tuyệt đối không tin các tài khoản mạo danh để tránh bị lừa đảo.</p>
                <p>✅ Mọi giao dịch mua tool chỉ được thực hiện thông qua các admin trong group chat chính thức.</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  )
} 