import React from "react"
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Alkhair PH',
  description: 'Alkhair Philippines — digital marketing, ecommerce and live selling solutions',
  icons: {
    icon: '/Clients/Logo.png',
  },
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased text-[hsl(var(--foreground))]`}> 

        {/* Background: AirrLabs-inspired gradient and decorative blobs */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#071029] via-[#071b2f] to-[#0b1020]" />

        <div className="fixed left-0 top-12 -z-10 pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-[rgba(34,197,94,0.07)] blur-3xl -translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="fixed right-0 bottom-12 -z-10 pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-[rgba(99,102,241,0.06)] blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        {/* App container: centers content and provides consistent max width */}
        <div className="min-h-screen flex flex-col">
          <Header />

          <div className="w-full">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-16 max-w-full">
              <main className="relative z-10 pt-20">{children}</main>
            </div>
          </div>

          <Footer />

          <Analytics />
        </div>
      </body>
    </html>
  )
}