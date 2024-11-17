'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name')
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error)

      router.push('/login')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Đã có lỗi xảy ra')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-dark-light rounded-xl p-8 shadow-lg border border-gray-800">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg bg-dark border border-gray-700 px-4 py-2 text-white focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 block w-full rounded-lg bg-dark border border-gray-700 px-4 py-2 text-white focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Tên hiển thị
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full rounded-lg bg-dark border border-gray-700 px-4 py-2 text-white focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="John Doe"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 text-red-500 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all disabled:opacity-50"
          >
            {loading ? 'Đang xử lý...' : 'Đăng ký'}
          </button>

          <p className="text-center text-sm text-gray-400">
            Đã có tài khoản?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
} 