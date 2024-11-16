import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airdrop Killers - Công Cụ',
  description: 'Công cụ hỗ trợ Airdrop',
  icons: {
    icon: '/logo.png',
    apple: [
      { url: '/logo.png' },
      { url: '/logo.png', sizes: '72x72' },
      { url: '/logo.png', sizes: '114x114' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
