export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark pt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Liên Hệ Với Chúng Tôi
          </h1>

          <div className="bg-dark-light rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Kênh Liên Lạc Chính Thức</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-6h-2v6zm0-8h2V8h-2v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Kênh Thông Báo</h3>
                  <p className="text-gray-400 mb-2">Cập nhật mới nhất về tool và hướng dẫn sử dụng</p>
                  <a href="https://t.me/airdropkillersann" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @airdropkillersann
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-6h-2v6zm0-8h2V8h-2v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Group Chat Cộng Đồng</h3>
                  <p className="text-gray-400 mb-2">Trao đổi, hỗ trợ và chia sẻ kinh nghiệm</p>
                  <a href="https://t.me/airdropkillerschat" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @airdropkillerschat
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-light rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Lưu Ý Quan Trọng</h2>
            <div className="space-y-4 text-gray-300">
              <p>⚠️ Airdrop Killers chỉ có duy nhất 2 kênh liên lạc chính thức trên Telegram như trên.</p>
              <p>⚠️ Chúng tôi không có số điện thoại hay hotline hỗ trợ.</p>
              <p>⚠️ Tuyệt đối không tin các tài khoản mạo danh để tránh bị lừa đảo.</p>
              <p>✅ Mọi giao dịch mua tool chỉ được thực hiện thông qua các admin trong group chat chính thức.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 