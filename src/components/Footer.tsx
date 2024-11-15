import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Airdrop Killers</h3>
            <p className="text-gray-400">
              Công cụ tự động hóa airdrop chuyên nghiệp hàng đầu Việt Nam
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Sản Phẩm</h4>
            <ul className="space-y-2">
              <li><Link href="/products/kuroro" className="text-gray-400 hover:text-white">Kuroro</Link></li>
              <li><Link href="/products/blum" className="text-gray-400 hover:text-white">Blum</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Công Ty</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">Giới Thiệu</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Liên Hệ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Pháp Lý</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Chính Sách Bảo Mật</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Điều Khoản Dịch Vụ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Airdrop Killers. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  )
}
