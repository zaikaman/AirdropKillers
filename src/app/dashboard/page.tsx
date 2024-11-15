'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Tool {
  id: string
  name: string
  key: string
  activated: boolean
}

interface User {
  id: string
  email: string
  name: string | null
  tools?: Tool[]
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [tools, setTools] = useState<Tool[]>([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    // Lấy thông tin user và tools
    fetch('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          localStorage.removeItem('token')
          router.push('/login')
        } else {
          setUser(data.user)
          setTools(data.user.tools || [])
        }
      })
  }, [router])

  if (!user) {
    return (
      <div className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Đang tải...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
          
          <div className="bg-dark-light rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Thông Tin Tài Khoản</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-400">Email</label>
                <div className="text-xl">{user.email}</div>
              </div>
              
              <div>
                <label className="text-gray-400">Tên</label>
                <div className="text-xl">{user.name || 'Chưa cập nhật'}</div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">Tool Đã Mua</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-800 rounded-lg">
                  <div className="font-bold mb-2">Kuroro</div>
                  <div className="text-gray-400">
                    Trạng thái: {tools.some(t => t.name === 'Kuroro' && t.activated) 
                      ? (
                        <span className="text-green-500">
                          Đã kích hoạt
                          {tools.find(t => t.name === 'Kuroro')?.key && (
                            <div className="mt-2 text-sm font-mono">
                              Key: {tools.find(t => t.name === 'Kuroro')?.key}
                            </div>
                          )}
                        </span>
                      )
                      : 'Chưa kích hoạt'
                    }
                  </div>
                </div>
                <div className="p-4 border border-gray-800 rounded-lg">
                  <div className="font-bold mb-2">Blum</div>
                  <div className="text-gray-400">
                    Trạng thái: {tools.some(t => t.name === 'Blum' && t.activated) 
                      ? (
                        <span className="text-green-500">
                          Đã kích hoạt
                          {tools.find(t => t.name === 'Blum')?.key && (
                            <div className="mt-2 text-sm font-mono">
                              Key: {tools.find(t => t.name === 'Blum')?.key}
                            </div>
                          )}
                        </span>
                      )
                      : 'Chưa kích hoạt'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 