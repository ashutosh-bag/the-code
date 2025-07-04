"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function About() {
  const [isClient, setIsClient] = useState(false)

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section id="about" className="bg-[#0e0e11] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative">
          {/* Decorative corner element */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-1 border-t-1 border-[#dcbe8b] -translate-x-6 -translate-y-6 hidden md:block"></div>
          
          {/* Image container with zoom effect */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-none">
            <div className="relative overflow-hidden group">
              {isClient && (
                <Image
                  src="/assets/2.jpeg" 
                  alt="Luxury hotel room with elegant bedding and decor"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              )}
              
            </div>
            
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-serif text-[#dcbe8b] mb-8">Our Story</h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  The Code was born from a vision to create more than just a place to stay—to create a sanctuary 
                  where luxury is not just seen, but felt. Where every detail has been carefully considered and every 
                  experience thoughtfully designed.
                </p>
                
                <p className="text-gray-300 text-lg">
                  Nestled in the heart of the city yet feeling worlds away, our boutique hotel stands as a testament to 
                  refined elegance and discreet opulence. We believe in the power of quiet luxury—the kind that 
                  doesn't announce itself loudly, but reveals itself in the smallest details to those who know how to 
                  look.
                </p>
                
                <blockquote className="border-l-2 border-[#dcbe8b] pl-6 italic text-[#dcbe8b] my-8">
                  "Like a well-kept secret, The Code reveals itself only to those who seek a deeper understanding of 
                  what true luxury means."
                </blockquote>
                
                <p className="text-gray-300 text-lg">
                  We invite you to be one of the select few who discover what makes The Code not just a hotel, but an 
                  experience that stays with you long after you've returned home.
                </p>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-1 border-b-1 border-[#dcbe8b] translate-x-6 translate-y-6 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
