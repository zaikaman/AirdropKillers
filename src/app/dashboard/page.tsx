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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

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
      .finally(() => setIsLoading(false))
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            <span className="ml-3">Đang tải...</span>
          </div>
        </div>
      </div>
    )
  }

  if (!user) return null

  const downloadUrls = {
    Kuroro: 'https://drive.google.com/file/d/1cDS3-0JWY8rlu0XM2MsBevYlkqWFxZRG/view?usp=sharing',
    Blum: 'https://drive.google.com/file/d/1IDL_OpBdk8CDuwaQYLUenXRxQZksHkMN/view?usp=sharing'
  }

  return (
    <div className="min-h-screen bg-dark pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <button
              onClick={() => {
                localStorage.removeItem('token')
                router.push('/login')
              }}
              className="px-4 py-2 text-sm bg-dark-light hover:bg-dark border border-gray-700 rounded-lg transition-colors"
            >
              Đăng xuất
            </button>
          </div>
          
          <div className="bg-dark-light rounded-xl p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Thông Tin Tài Khoản</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark/50 rounded-lg p-4">
                  <label className="text-sm text-gray-400">Email</label>
                  <div className="text-lg font-medium mt-1">{user.email}</div>
                </div>
                <div className="bg-dark/50 rounded-lg p-4">
                  <label className="text-sm text-gray-400">Tên</label>
                  <div className="text-lg font-medium mt-1">{user.name || 'Chưa cập nhật'}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Tool Đã Mua</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {['Kuroro', 'Blum'].map((toolName) => {
                  const tool = tools.find(t => t.name === toolName)
                  const isActivated = tool?.activated
                  
                  return (
                    <div key={toolName} className="bg-dark/50 rounded-lg p-6 border border-gray-800">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{toolName}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          isActivated ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-400'
                        }`}>
                          {isActivated ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
                        </div>
                      </div>
                      
                      {isActivated && tool?.key && (
                        <div className="space-y-4">
                          <div className="bg-dark rounded-lg p-3">
                            <div className="text-xs text-gray-400 mb-1">License Key</div>
                            <code className="text-sm font-mono text-primary">{tool.key}</code>
                          </div>
                          <a
                            href={downloadUrls[toolName as keyof typeof downloadUrls]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                          >
                            <span>Tải tool</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 