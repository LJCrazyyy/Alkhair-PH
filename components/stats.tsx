"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 40, suffix: "+", label: "BRAND PARTNERS" },
  { value: 100, suffix: "+", label: "PROFESSIONAL HOSTS" },
  { value: 1000, suffix: "+", label: "LIVESTREAM SESSIONS" },
  { value: 3, suffix: "", label: "PLATFORMS" },
]

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return { count, ref }
}

export function Stats() {
  const [counts, setCounts] = useState<{ count: number; suffix: string; label: string }[]>(stats.map(stat => ({ ...stat, count: 0 })))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setCounts(prevCounts => {
              const newCounts = [...prevCounts]
              newCounts[index].count = stats[index].value
              return newCounts
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const statElements = document.querySelectorAll('.stat-item')
    statElements.forEach(statElement => {
      if (statElement) {
        observer.observe(statElement)
      }
    })

    return () => {
      statElements.forEach(statElement => {
        if (statElement) {
          observer.unobserve(statElement)
        }
      })
    }
  }, [])

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counts.map((stat, index) => (
            <div key={index} className="text-center stat-item">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.count.toLocaleString()}{stat.suffix}
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
