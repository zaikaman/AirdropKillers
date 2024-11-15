import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Đăng Nhập</h1>
        <LoginForm />
      </div>
    </div>
  )
} 