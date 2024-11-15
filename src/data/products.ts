export interface Product {
  name: string
  slug: string
  price: string
  period: string
  description: string
  features: string[]
  image: string
  details?: {
    overview?: string
    requirements?: string[]
    installation?: string[]
    usage?: string[]
  }
}

export const products: Product[] = [
  {
    name: 'Kuroro',
    slug: 'kuroro',
    price: '40.000đ',
    period: 'vĩnh viễn',
    description: 'Tool auto click thông minh cho game Kuroro Ranch',
    features: [
      'Auto click tự động',
      'Giao diện đơn giản',
      'Cập nhật miễn phí',
      'Hỗ trợ qua group'
    ],
    image: '/kuroro.png',
    details: {
      overview: 'Tool auto click Kuroro Ranch giúp bạn tự động hóa các thao tác trong game một cách thông minh và hiệu quả.',
      requirements: [
        'Windows 10/11',
        'RAM 4GB trở lên',
        'Telegram Desktop',
        '.NET Framework 4.7.2'
      ],
      installation: [
        'Tải file cài đặt từ link được cung cấp',
        'Giải nén file rar',
        'Làm theo hướng dẫn trong file .txt'
      ],
      usage: [
        'Mở Telegram Desktop',
        'Vào miniapp Kuroro Ranch',
        'Chạy tool bằng cách mở file .exe',
        'Chọn 1 trong 3 chức năng bạn muốn dùng trên màn hình'
      ]
    }
  },
  {
    name: 'Blum',
    slug: 'blum',
    price: '50.000đ',
    period: 'vĩnh viễn',
    description: 'Tool auto click thông minh cho game Blum',
    features: [
      'Auto click tự động',
      'Giao diện đơn giản', 
      'Cập nhật miễn phí',
      'Hỗ trợ qua group'
    ],
    image: '/blum.png',
    details: {
      overview: 'Tool auto click Blum được thiết kế đặc biệt để tối ưu hóa trải nghiệm chơi game của bạn.',
      requirements: [
        'Windows 10/11',
        'RAM 4GB trở lên',
        'Telegram Desktop',
        '.NET Framework 4.7.2'
      ],
      installation: [
        'Tải file cài đặt từ link được cung cấp',
        'Giải nén file rar',
        'Làm theo hướng dẫn trong file .txt'
      ],
      usage: [
        'Mở Telegram Desktop',
        'Vào miniapp Blum',
        'Chạy tool bằng cách mở file .exe'
      ]
    }
  }
] 