import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plant Identifier',
  description: 'Identify plants instantly with AI technology',
  icons: {
    icon: '/leaf-icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-plant-green-50`}>
        {children}
      </body>
    </html>
  )
}