"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import Image from "next/image"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  position?: "bottom-right" | "bottom-left"
  showPopupOnLoad?: boolean
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your servicesS.",
  position = "bottom-right",      
  showPopupOnLoad = false,
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(showPopupOnLoad)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the button after a short delay for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const positionClasses = position === "bottom-right" ? "right-4 sm:right-6" : "left-4 sm:left-6"

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 ${positionClasses} z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
    >
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-3 max-w-xs animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
              <Image src="/assets/whatsapp.png" alt="WhatsApp" width={32} height={32} className="rounded-full" />

              </div>
              <span className="font-medium">WhatsApp Chat</span> 
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">Chat with us directly through WhatsApp for quick responses!</p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Start Chat</span>
            <MessageCircle size={18} />
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-[#dcbe8b] hover:bg-[#e3d9c9] text-white shadow-lg transition-all hover:scale-105 ${isOpen ? "rotate-180" : ""}`}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative w-12 h-12">
            <Image src="/assets/whatsapp.png" alt="WhatsApp" width={48} height={48} className="object-contain" />

          </div>
        )}
      </button>
    </div>
  )
}
  