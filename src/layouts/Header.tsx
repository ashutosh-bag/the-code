"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm h-16 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="p-9 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="text-2xl text-[#dcbe8b] font-serif tracking-wide">
          THE CODE
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center text-white font-light">
            <li>
              <Link href="#rooms" className="hover:text-[#dfc79d] transition duration-300">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="#experiences" className="hover:text-[#dfc79d] transition duration-300">
                Experiences
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#dfc79d] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <button className="border border-[#dfc79d] text-[#dfc79d] px-4 py-1 rounded transition duration-300 hover:bg-[#dfc79d] hover:text-black">
                Book Now
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 py-4">
          <ul className="flex flex-col items-center space-y-4 text-white">
            <li>
              <Link href="#rooms" className="hover:text-[#dfc79d] transition duration-300">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="#experiences" className="hover:text-[#dfc79d] transition duration-300">
                Experiences
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#dfc79d] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <button className="border border-[#dfc79d] text-[#dfc79d] px-4 py-1 rounded transition duration-300 hover:bg-[#dfc79d] hover:text-black">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
