import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Alkhair PH | Premier Live Selling Agency',
  description: 'Premier live selling agency in the Philippines - eCommerce and livestreaming solutions for Lazada, Shopee, and TikTok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}