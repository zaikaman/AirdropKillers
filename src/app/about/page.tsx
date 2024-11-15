import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Câu Chuyện Của Chúng Tôi
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              Airdrop Killers được thành lập bởi một nhóm các lập trình viên đam mê blockchain và tiền mã hoá. 
              Chúng tôi bắt đầu như những thợ săn airdrop nhiệt huyết, trải qua vô số đêm thức trắng để không bỏ lỡ bất kỳ cơ hội nào.
            </p>

            <p className="text-xl text-gray-300 mb-8">
              Sau nhiều tháng tự động hoá các thao tác lặp đi lặp lại, chúng tôi nhận ra rằng công cụ chúng tôi tạo ra 
              có thể giúp đỡ cả cộng đồng. Đó là lúc Airdrop Killers chính thức ra đời, với sứ mệnh giúp mọi người 
              tiết kiệm thời gian và không bỏ lỡ các cơ hội airdrop giá trị.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-white">Giá Trị Cốt Lõi</h2>
            <ul className="space-y-4 text-gray-300">
              <li>🎯 Tập trung vào giá trị thực: Mọi tính năng đều phải thực sự hữu ích cho người dùng</li>
              <li>⚡ Hiệu quả tối đa: Tự động hóa mọi thứ có thể để tiết kiệm thời gian của bạn</li>
              <li>🤝 Cộng đồng là trên hết: Lắng nghe và phát triển cùng cộng đồng</li>
            </ul>

            <h2 className="text-3xl font-bold my-6 text-white">Kết Nối Với Chúng Tôi</h2>
            <div className="space-y-4">
              <Link 
                href="https://t.me/airdropkillersann" 
                target="_blank"
                className="flex items-center space-x-2 text-primary hover:text-primary-light transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.002-.168.518-.318.97-.468 1.348-.215.545-.398.872-.574 1.008-.295.228-.565.216-.785.141-.278-.095-1.013-.663-1.013-.663l-2.307-1.491c-.466-.302-.524-.473-.133-.784.62-.493 1.362-1.077 1.82-1.431.459-.354.918-.708 1.087-.842.168-.134.291-.235.351-.334.067-.112.013-.179-.133-.192-.073-.007-.168.02-.285.083l-3.193 2.098s-.276.184-.781.184c-.505 0-1.098-.159-1.723-.477-.625-.318-1.111-.637-1.111-.637s-.412-.259.288-.533c1.398-.547 3.122-1.233 4.848-1.92 1.726-.687 3.456-1.373 4.848-1.92.7-.274.826-.274.826-.274.073.007.213.067.213.274 0 .112-.027.246-.087.399z"/>
                </svg>
                <span>Kênh Thông Báo</span>
              </Link>
              
              <Link 
                href="https://t.me/airdropkillerschat" 
                target="_blank"
                className="flex items-center space-x-2 text-primary hover:text-primary-light transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.002-.168.518-.318.97-.468 1.348-.215.545-.398.872-.574 1.008-.295.228-.565.216-.785.141-.278-.095-1.013-.663-1.013-.663l-2.307-1.491c-.466-.302-.524-.473-.133-.784.62-.493 1.362-1.077 1.82-1.431.459-.354.918-.708 1.087-.842.168-.134.291-.235.351-.334.067-.112.013-.179-.133-.192-.073-.007-.168.02-.285.083l-3.193 2.098s-.276.184-.781.184c-.505 0-1.098-.159-1.723-.477-.625-.318-1.111-.637-1.111-.637s-.412-.259.288-.533c1.398-.547 3.122-1.233 4.848-1.92 1.726-.687 3.456-1.373 4.848-1.92.7-.274.826-.274.826-.274.073.007.213.067.213.274 0 .112-.027.246-.087.399z"/>
                </svg>
                <span>Group Chat Cộng Đồng</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
