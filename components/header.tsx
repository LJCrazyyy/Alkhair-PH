"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR SERVICES", href: "/services" },
  { label: "OUR CLIENTS", href: "/clients" },
  { label: "NEWS", href: "/news" },
  { label: "CHANNEL PARTNERS", href: "/partners" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT US", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(7,16,41,0.6)] backdrop-blur-sm border-b border-border">
      
      {/* Container with left & right margin */}
      <div className="max-w-full mx-auto px-3 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image
                src="/Clients/Logo.png"
                alt="Alkhair PH Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[var(--foreground)] text-sm sm:text-lg font-semibold tracking-wide">
              Alkhair Philippines
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    "relative text-sm font-medium transition-all duration-300 hover:scale-105 " +
                    (isActive
                      ? "text-[var(--primary)] font-semibold"
                      : "text-muted-foreground hover:text-[var(--primary)]")
                  }
                >
                  <span className="relative z-10">{item.label}</span>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--hover-green-foreground)] rounded-full animate-pulse-glow"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[var(--foreground)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                    }}
                    className={
                      "text-sm font-medium transition-colors " +
                      (isActive
                        ? "text-[var(--hover-green-foreground)] font-semibold"
                        : "text-muted-foreground hover:text-[var(--hover-green-foreground)]")
                    }
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}