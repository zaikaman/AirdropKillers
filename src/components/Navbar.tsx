'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    // Kiểm tra token khi component mount và khi localStorage thay đổi
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      setIsLoggedIn(!!token)
    }

    checkAuth()
    window.addEventListener('storage', checkAuth)
    
    return () => {
      window.removeEventListener('storage', checkAuth)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    window.location.href = '/'
  }

  return (
    <nav className="fixed w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Airdrop Killers Logo" 
                width={32} 
                height={32}
              />
              <span className="text-xl font-bold">Airdrop Killers</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-300 hover:text-white transition">
              Sản Phẩm
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-white transition">
              Tính Năng
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Liên Hệ
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard" 
                  className="text-gray-300 hover:text-white transition"
                >
                  Tài Khoản
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition"
                >
                  Đăng Xuất
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login"
                  className="text-gray-300 hover:text-white transition"
                >
                  Đăng Nhập
                </Link>
                <Link 
                  href="/register"
                  className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition"
                >
                  Đăng Ký
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/products" className="block px-3 py-2 text-gray-300 hover:text-white transition">
              Sản Phẩm
            </Link>
            <Link href="/features" className="block px-3 py-2 text-gray-300 hover:text-white transition">
              Tính Năng
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition">
              Liên Hệ
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="block px-3 py-2 text-gray-300 hover:text-white transition">
                  Tài Khoản
                </Link>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition"
                >
                  Đăng Xuất
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-3 py-2 text-gray-300 hover:text-white transition">
                  Đăng Nhập
                </Link>
                <Link href="/register" className="block px-3 py-2 text-gray-300 hover:text-white transition">
                  Đăng Ký
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
