"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "OUR CLIENTS", href: "#clients" },
  { label: "CHANNEL PARTNERS", href: "#partners" },
  { label: "CAREERS", href: "#careers" },
  { label: "CONTACT US", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") return
    const updateHash = () => setActiveHash(window.location.hash || "")
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--primary)]/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-32 h-32 relative">
              <Image
                src="/Clients/Aklogo.png"
                alt="Alkhair PH Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeHash === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveHash(item.href)}
                  className={
                    "relative text-sm font-medium transition-all duration-300 hover:scale-105 " +
                    (isActive
                      ? "text-[var(--hover-green-foreground)] font-semibold"
                      : "text-muted-foreground hover:text-[var(--hover-green-foreground)]")
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
            className="lg:hidden text-[var(--primary-foreground)]"
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
                const isActive = activeHash === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      setActiveHash(item.href)
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