"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Breadcrumb() {
  const [isClient, setIsClient] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Ensure rendering only happens client-side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Scroll listener for dynamic darkening
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionHeight = sectionRef.current.offsetHeight
      const scrollPosition = window.scrollY

      const progress = Math.min(scrollPosition / (sectionHeight * 0.7), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Opacity and background color for scroll overlay
  const overlayOpacity = 0.2 + scrollProgress * 0.65
  const backgroundColor = `rgba(0, 0, 0, 1)` // solid black for fade

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {isClient ? (
        <div className="absolute inset-0">
          {/* Background image */}
          <Image
            src="/assets/7.jpg"
            alt="Luxury beachfront resort with pool"
            fill
            priority
            className="object-cover"
          />

          {/* Static dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Dynamic scroll-based darkening overlay */}
          <div
            className="absolute inset-0 transition-colors duration-300"
            style={{
              backgroundColor,
              opacity: overlayOpacity,
            }}
          />
        </div>
      ) : (
        // SSR fallback
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="mt-16 md:mt-0">
          <h2 className="text-[#dfc79d] text-xl md:text-2xl font-serif tracking-widest mb-4">WELCOME TO</h2>
          <h1 className="bg-gradient-to-r from-[#dcbe8b] to-[#e3d9c9] bg-clip-text text-transparent text-5xl md:text-7xl lg:text-6xl font-serif font-extralight tracking-wide mb-6">
            THE CODE EXCLUSIVE
          </h1>
          <p className="text-[#dfc79d] text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Crack the code of refined escape. Where luxury whispers secrets only a few will discover.
          </p>
          <button className="text-[#dfc79d] px-8 py-3 rounded-sm text-lg font-light hover:text-white tracking-wider border border-[#dfc79d] hover:bg-[#dfc79d] transition duration-300">
            Unlock the Experience
          </button>
        </div>
      </div>
    </div>
  )
}
