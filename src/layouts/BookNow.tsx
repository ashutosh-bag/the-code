"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Check, ChevronRight, Calendar, Users, CreditCard } from "lucide-react"


// Room data
const roomOptions = [
  { id: 1, name: "The Algorithm Room", price: 550 },
  { id: 2, name: "The Binary Penthouse", price: 1200 },
  { id: 3, name: "The Cipher Suite", price: 850 },
]

// Guest options
const guestOptions = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
]

export default function BookNow() {

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    guests: "1",
    roomType: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
  })
  const [bookingDetails, setBookingDetails] = useState({
    confirmationCode: "",
    totalPrice: 0,
    roomName: "",
  })

  // Calculate total price based on room selection and dates
  useEffect(() => {
    if (formData.roomType && formData.checkInDate && formData.checkOutDate) {
      const selectedRoom = roomOptions.find((room) => room.name === formData.roomType)
      if (selectedRoom) {
        const checkIn = new Date(formData.checkInDate)
        const checkOut = new Date(formData.checkOutDate)
        const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
        const total = selectedRoom.price * (nights > 0 ? nights : 1)

        setBookingDetails((prev) => ({
          ...prev,
          totalPrice: total,
          roomName: selectedRoom.name,
        }))
      }
    }
  }, [formData.roomType, formData.checkInDate, formData.checkOutDate])

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission for step 1
  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  // Handle form submission for step 2
  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate a random confirmation code
    const confirmationCode = `CODE-${Math.floor(100000 + Math.random() * 900000)}`
    setBookingDetails((prev) => ({
      ...prev,
      confirmationCode,
    }))

    setCurrentStep(3)
  }

  // Handle booking another stay
  const handleBookAnother = () => {
    setCurrentStep(1)
    setFormData({
      checkInDate: "",
      checkOutDate: "",
      guests: "1",
      roomType: "",
      cardNumber: "",
      expirationDate: "",
      securityCode: "",
    })
  }

  return (
    <section id="book-now" className="bg-[#0e0e11] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#dcbe8b] mb-4">Book Your Stay</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Secure your exclusive experience at The Code with our simple booking process. Your journey to refined luxury
            is just a few steps away.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8 md:space-x-16">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  currentStep > 1
                    ? "bg-[#dcbe8b] border-[#dcbe8b]"
                    : currentStep === 1
                      ? "border-[#dcbe8b] text-[#dcbe8b]"
                      : "border-gray-600 text-gray-600"
                }`}
              >
                {currentStep > 1 ? <Check className="w-5 h-5 text-black" /> : "1"}
              </div>
              <span className={`mt-2 text-sm ${currentStep >= 1 ? "text-[#dcbe8b]" : "text-gray-600"}`}>Details</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  currentStep > 2
                    ? "bg-[#dcbe8b] border-[#dcbe8b]"
                    : currentStep === 2
                      ? "border-[#dcbe8b] text-[#dcbe8b]"
                      : "border-gray-600 text-gray-600"
                }`}
              >
                {currentStep > 2 ? <Check className="w-5 h-5 text-black" /> : "2"}
              </div>
              <span className={`mt-2 text-sm ${currentStep >= 2 ? "text-[#dcbe8b]" : "text-gray-600"}`}>Payment</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  currentStep === 3 ? "border-[#dcbe8b] text-[#dcbe8b]" : "border-gray-600 text-gray-600"
                }`}
              >
                3
              </div>
              <span className={`mt-2 text-sm ${currentStep === 3 ? "text-[#dcbe8b]" : "text-gray-600"}`}>
                Confirmation
              </span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#111113] border border-gray-800 rounded-sm p-8 md:p-12">
          {/* Step 1: Details */}
          {currentStep === 1 && (
            <form onSubmit={handleContinueToPayment}>
              <h3 className="text-2xl font-serif text-[#dcbe8b] mb-8">Your Stay Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="checkInDate" className="block text-gray-300 mb-2">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkInDate"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dcbe8b]"
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkOutDate" className="block text-gray-300 mb-2">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkOutDate"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dcbe8b]"
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-gray-300 mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dcbe8b] appearance-none"
                    >
                      {guestOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <Users className="absolute right-3 top-3 h-5 w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="roomType" className="block text-gray-300 mb-2">
                    Room Type
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dcbe8b]"
                  >
                    <option value="" disabled>
                      Select a room
                    </option>
                    {roomOptions.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name} - ${room.price}/night
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-transparent border border-[#dcbe8b] text-[#dcbe8b] px-6 py-3 rounded-sm hover:bg-[#dcbe8b] hover:text-black transition duration-300 flex items-center"
                >
                  Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <form onSubmit={handleCompleteBooking}>
              <h3 className="text-2xl font-serif text-[#dcbe8b] mb-8">Payment Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-400">Room Type</span>
                  <span className="text-white">{formData.roomType}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Check-in Date</span>
                  <span className="text-white">{formData.checkInDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Check-out Date</span>
                  <span className="text-white">{formData.checkOutDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Number of Guests</span>
                  <span className="text-white">{formData.guests}</span>
                </div>

                <div className="md:col-span-2 flex justify-between border-t border-gray-800 pt-4 mt-2">
                  <span className="text-gray-300 font-medium">Total (including taxes)</span>
                  <span className="text-[#dcbe8b] font-medium">${bookingDetails.totalPrice}</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <label htmlFor="cardNumber" className="block text-gray-300 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dcbe8b]"
                    />
                    <CreditCard className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="expirationDate" className="block text-gray-300 mb-2">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                      className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dcbe8b]"
                    />
                  </div>

                  <div>
                    <label htmlFor="securityCode" className="block text-gray-300 mb-2">
                      Security Code
                    </label>
                    <input
                      type="text"
                      id="securityCode"
                      name="securityCode"
                      value={formData.securityCode}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                      className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#dcbe8b]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-transparent border border-[#dcbe8b] text-[#dcbe8b] px-6 py-3 rounded-sm hover:bg-[#dcbe8b] hover:text-black transition duration-300 flex items-center"
                >
                  Complete Booking <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#dcbe8b]/20 flex items-center justify-center">
                  <Check className="h-8 w-8 text-[#dcbe8b]" />
                </div>
              </div>

              <h3 className="text-2xl font-serif text-[#dcbe8b] mb-4">Booking Confirmed</h3>

              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Thank you for choosing The Code. Your reservation has been confirmed and you will receive a confirmation
                email shortly.
              </p>

              <div className="bg-black/50 border border-gray-800 rounded-sm p-6 max-w-md mx-auto mb-8">
                <div className="mb-4">
                  <p className="text-gray-400 text-sm">Confirmation Code</p>
                  <p className="text-[#dcbe8b] font-mono">{bookingDetails.confirmationCode}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Check-in</p>
                    <p className="text-white">{formData.checkInDate}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Check-out</p>
                    <p className="text-white">{formData.checkOutDate}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Room Type</p>
                    <p className="text-white">{formData.roomType}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Guests</p>
                    <p className="text-white">{formData.guests}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBookAnother}
                className="bg-transparent border border-[#dcbe8b] text-[#dcbe8b] px-6 py-3 rounded-sm hover:bg-[#dcbe8b] hover:text-black transition duration-300"
              >
                Book Another Stay
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
