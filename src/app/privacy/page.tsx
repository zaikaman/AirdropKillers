export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Chính Sách Bảo Mật
          </h1>
          
          <div className="space-y-12">
            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">1. Thu Thập Thông Tin</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Chúng tôi không thu thập bất kỳ thông tin cá nhân nào của người dùng. 
                  Tool hoạt động hoàn toàn độc lập trên máy tính của bạn.
                </p>
              </div>
            </section>

            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">2. Bảo Mật Dữ Liệu</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Tool không lưu trữ thông tin đăng nhập Telegram của bạn</li>
                <li>Không thu thập hay gửi dữ liệu về máy chủ của chúng tôi</li>
                <li>Không can thiệp vào dữ liệu cá nhân trên Telegram của bạn</li>
              </ul>
            </section>

            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">3. Quyền Lợi Của Người Dùng</h2>
              <div className="text-gray-300">
                <p className="mb-4">Bạn có quyền:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Biết tool đang hoạt động như thế nào</li>
                  <li>Dừng sử dụng tool bất cứ lúc nào</li>
                  <li>Yêu cầu hỗ trợ kỹ thuật qua group chat</li>
                </ul>
              </div>
            </section>

            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">4. Miễn Trừ Trách Nhiệm</h2>
              <div className="text-gray-300">
                <p className="mb-4">Chúng tôi không chịu trách nhiệm trong các trường hợp:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-red-400">Tài khoản Telegram của bạn bị ban</li>
                  <li>Mất mát dữ liệu do sử dụng tool không đúng cách</li>
                  <li>Các thiệt hại phát sinh trong quá trình sử dụng</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 