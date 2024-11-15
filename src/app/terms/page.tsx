export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Điều Khoản Dịch Vụ
          </h1>

          <div className="space-y-12">
            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">1. Điều Khoản Sử Dụng</h2>
              <div className="text-gray-300">
                <p className="mb-4">Bằng việc sử dụng tool của Airdrop Killers, bạn đồng ý:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Chỉ sử dụng cho mục đích cá nhân</li>
                  <li>Không chia sẻ hay bán lại tool</li>
                  <li>Tuân thủ hướng dẫn sử dụng</li>
                </ul>
              </div>
            </section>

            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">2. Giới Hạn Trách Nhiệm</h2>
              <div className="text-gray-300">
                <p className="mb-4">Chúng tôi KHÔNG chịu trách nhiệm về:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-red-400 font-semibold">Việc tài khoản Telegram của bạn bị ban</li>
                  <li>Các thiệt hại về tài sản ảo</li>
                  <li>Mất cơ hội airdrop</li>
                  <li>Các rủi ro khác khi sử dụng tool</li>
                </ul>
              </div>
            </section>

            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">3. Quyền Sở Hữu</h2>
              <div className="text-gray-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Tool thuộc quyền sở hữu của Airdrop Killers</li>
                  <li>Nghiêm cấm sao chép, phân phối lại dưới mọi hình thức</li>
                  <li>Vi phạm sẽ bị xử lý theo quy định pháp luật</li>
                </ul>
              </div>
            </section>

            <section className="bg-dark-light rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">4. Chấm Dứt Sử Dụng</h2>
              <div className="text-gray-300">
                <p className="mb-4">Chúng tôi có quyền:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dừng hỗ trợ kỹ thuật nếu bạn vi phạm điều khoản</li>
                  <li>Từ chối bán tool cho các trường hợp nghi ngờ lạm dụng</li>
                  <li>Cập nhật điều khoản mà không cần thông báo trước</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 