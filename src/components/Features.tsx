export default function Features() {
  const features = [
    {
      title: 'Auto Click Thông Minh',
      description: 'Tự động click các nút và tương tác với miniapp Telegram một cách thông minh',
      icon: '🤖'
    },
    {
      title: 'Hỗ Trợ Nhiều Miniapp',
      description: 'Tương thích với đa dạng các miniapp phổ biến trên Telegram',
      icon: '📱'
    },
    {
      title: 'Dễ Dàng Cài Đặt',
      description: 'Giao diện đơn giản, dễ sử dụng, không cần kiến thức chuyên sâu',
      icon: '⚡'
    },
    {
      title: 'Cập Nhật Liên Tục',
      description: 'Thường xuyên cập nhật để tương thích với các miniapp telegram mới',
      icon: '🔄'
    }
  ]

  return (
    <section className="py-24 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tính Năng Mạnh Mẽ</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Công cụ của chúng tôi được trang bị các tính năng tiên tiến để tối đa hóa thành công airdrop của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-dark border border-gray-800 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
