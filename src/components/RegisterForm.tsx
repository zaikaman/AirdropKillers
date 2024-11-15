'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md bg-dark-light border-gray-700"
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
          className="mt-1 block w-full rounded-md bg-dark-light border-gray-700"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Tên hiển thị
        </label>
        <input
          type="text"
          name="name"
          className="mt-1 block w-full rounded-md bg-dark-light border-gray-700"
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-primary hover:bg-primary-dark rounded-md"
      >
        {loading ? 'Đang xử lý...' : 'Đăng ký'}
      </button>
    </form>
  )
} 