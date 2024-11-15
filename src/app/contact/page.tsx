import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Liên Hệ Với Chúng Tôi
          </h1>

          <div className="bg-dark-light rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Kênh Liên Lạc Chính Thức</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.002-.168.518-.318.97-.468 1.348-.215.545-.398.872-.574 1.008-.295.228-.565.216-.785.141-.278-.095-1.013-.663-1.013-.663l-2.307-1.491c-.466-.302-.524-.473-.133-.784.62-.493 1.362-1.077 1.82-1.431.459-.354.918-.708 1.087-.842.168-.134.291-.235.351-.334.067-.112.013-.179-.133-.192-.073-.007-.168.02-.285.083l-3.193 2.098s-.276.184-.781.184c-.505 0-1.098-.159-1.723-.477-.625-.318-1.111-.637-1.111-.637s-.412-.259.288-.533c1.398-.547 3.122-1.233 4.848-1.92 1.726-.687 3.456-1.373 4.848-1.92.7-.274.826-.274.826-.274.073.007.213.067.213.274 0 .112-.027.246-.087.399z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kênh Thông Báo</h3>
                  <p className="text-gray-400 mb-2">
                    Cập nhật mới nhất về tool và hướng dẫn sử dụng
                  </p>
                  <Link 
                    href="https://t.me/airdropkillersann" 
                    target="_blank"
                    className="text-primary hover:text-primary-light transition"
                  >
                    @airdropkillersann
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.002-.168.518-.318.97-.468 1.348-.215.545-.398.872-.574 1.008-.295.228-.565.216-.785.141-.278-.095-1.013-.663-1.013-.663l-2.307-1.491c-.466-.302-.524-.473-.133-.784.62-.493 1.362-1.077 1.82-1.431.459-.354.918-.708 1.087-.842.168-.134.291-.235.351-.334.067-.112.013-.179-.133-.192-.073-.007-.168.02-.285.083l-3.193 2.098s-.276.184-.781.184c-.505 0-1.098-.159-1.723-.477-.625-.318-1.111-.637-1.111-.637s-.412-.259.288-.533c1.398-.547 3.122-1.233 4.848-1.92 1.726-.687 3.456-1.373 4.848-1.92.7-.274.826-.274.826-.274.073.007.213.067.213.274 0 .112-.027.246-.087.399z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Group Chat Cộng Đồng</h3>
                  <p className="text-gray-400 mb-2">
                    Trao đổi, hỗ trợ và chia sẻ kinh nghiệm
                  </p>
                  <Link 
                    href="https://t.me/airdropkillerschat" 
                    target="_blank"
                    className="text-primary hover:text-primary-light transition"
                  >
                    @airdropkillerschat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-light rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Lưu Ý Quan Trọng</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                ⚠️ Airdrop Killers chỉ có duy nhất 2 kênh liên lạc chính thức trên Telegram như trên.
              </p>
              <p>
                ⚠️ Chúng tôi không có số điện thoại hay hotline hỗ trợ.
              </p>
              <p>
                ⚠️ Tuyệt đối không tin các tài khoản mạo danh để tránh bị lừa đảo.
              </p>
              <p>
                ✅ Mọi giao dịch mua tool chỉ được thực hiện thông qua các admin trong group chat chính thức.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 