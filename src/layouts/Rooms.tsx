"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const roomsData = [
  {
    name: "Deluxe City View",
    description:
      "Elegant room with stunning city views, featuring modern amenities and comfortable furnishings. Perfect for business travelers and couples seeking luxury.",
    images: [
      "/assets/deluxecityview/Bathroom.jpg",
      "/assets/deluxecityview/Bathroom(1).jpg",
      "/assets/deluxecityview/Room(1).jpg",
      "/assets/deluxecityview/Room(2).jpg",
    ],
    size: "35 sq.m",
    guests: "Up to 2",
    price: "$280 / night",
    amenities: ["City View", "Free WiFi", "Air Conditioning", "Mini Bar", "Room Service"],
  },
 
  {
    name: "Executive Suite",
    description:
      "Luxurious suite with separate living area, premium furnishings, and exclusive amenities. Ideal for extended stays and special occasions.",
    images: [ "/assets/executivesuite/Entrance.jpg", "/assets/executivesuite/Room.jpg","/assets/executivesuite/Room(1).jpg","/assets/executivesuite/Room(2).jpg","/assets/executivesuite/Room(3).jpg","/assets/executivesuite/Room(4).jpg","/assets/executivesuite/Bathroom.jpg",],
    size: "65 sq.m",
    guests: "Up to 3",
    price: "$580 / night",
    amenities: [
      "Separate Living Area",
      "Executive Lounge Access",
      "Premium Bathroom",
      "Work Desk",
      "Complimentary Breakfast",
    ],
  },
  {
    name: "Super Deluxe Presidential",
    description:
      "The pinnacle of luxury featuring panoramic views, premium amenities, and personalized service. Our most exclusive accommodation experience.",
    images: [
      "/assets/superdeluxepresidential/Room.jpg",
      "/assets/superdeluxepresidential/Room(1).jpg",
      "/assets/superdeluxepresidential/Room(2)jpg",
      "/assets/superdeluxepresidential/Room(3).jpg",
      "/assets/superdeluxepresidential/Bathroom.jpg",
    ],
    size: "95 sq.m",
    guests: "Up to 4",
    price: "$950 / night",
    amenities: ["Panoramic Views", "Butler Service", "Private Terrace", "Jacuzzi", "Premium Dining"],
  },
]

export default function Rooms() {
  const [currentRoom, setCurrentRoom] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Reset image index when room changes
  useEffect(() => {
    setCurrentImage(0)
  }, [currentRoom])

  const nextRoom = () => setCurrentRoom((prev) => (prev + 1) % roomsData.length)
  const prevRoom = () => setCurrentRoom((prev) => (prev - 1 + roomsData.length) % roomsData.length)

  const nextImage = () => {
    if (isClient && room.images) {
      setCurrentImage((prev) => (prev + 1) % room.images.length)
    }
  }

  const prevImage = () => {
    if (isClient && room.images) {
      setCurrentImage((prev) => (prev - 1 + room.images.length) % room.images.length)
    }
  }

  // Only access roomsData after client-side rendering
  const room = isClient ? roomsData[currentRoom] : roomsData[0]

  return (
    <section id="rooms" className="bg-black text-white py-12 px-4 md:px-12">
      <h2 className="text-center text-4xl font-serif text-[#dfc79d] mb-4">Rooms & Suites</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
        Each room at The Code is meticulously designed to provide an exceptional experience, where modern luxury meets
        timeless elegance.
      </p>

      {isClient && (
        <div className="grid md:grid-cols-2 w-full gap-8 items-center">
          <div className="relative">
            <Image
              src={room.images?.[currentImage] || "/assets/placeholder.jpg"}
              alt={`${room.name} - Image ${currentImage + 1}`}
              width={1000}
              height={800}
              className="rounded-lg object-contain w-full h-[600px]"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=600&width=800"
              }}
            />

            {/* Room navigation buttons */}
            <button
              onClick={prevRoom}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous room"
            >
              ‹
            </button>
            <button
              onClick={nextRoom}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next room"
            >
              ›
            </button>

            {/* Image navigation buttons */}
            {room.images && room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 bottom-4 bg-black/50 text-white px-3 py-1 rounded hover:bg-black/70 transition-colors text-sm"
                  aria-label="Previous image"
                >
                  ‹ Prev
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 bottom-4 bg-black/50 text-white px-3 py-1 rounded hover:bg-black/70 transition-colors text-sm"
                  aria-label="Next image"
                >
                  Next ›
                </button>
              </>
            )}

            {/* Image indicators */}
            {room.images && room.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImage ? "bg-[#dfc79d]" : "bg-white/50"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#161618] p-6 rounded-lg w-full flex flex-col justify-between shadow-md">
            <h3 className="text-3xl font-serif text-[#dfc79d] mb-6">{room.name}</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{room.description}</p>

            <div className="grid grid-cols-2 gap-y-4 text-gray-400 mb-6">
              <div>
                <span className="block text-[#dfc79d] text-lg font-semibold">SIZE</span>
                <span className="text-white">{room.size}</span>
              </div>
              <div>
                <span className="block text-[#dfc79d] text-lg font-semibold">GUESTS</span>
                <span className="text-white">{room.guests}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-[#dfc79d] text-lg font-semibold">PRICE</span>
                <span className="text-white text-xl font-bold">{room.price}</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="block text-[#dfc79d] text-lg font-semibold mb-3">AMENITIES</span>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity, i) => (
                  <span key={i} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full border-2 border-[#dfc79d] text-[#dfc79d] py-3 rounded-lg hover:bg-[#dfc79d] hover:text-black transition duration-300 font-semibold">
              Book This Room
            </button>
          </div>
        </div>
      )}

      {/* Room selector dots */}
      {isClient && (
        <div className="flex justify-center mt-8 space-x-3">
          {roomsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentRoom(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentRoom ? "bg-[#dfc79d]" : "bg-gray-600"
              }`}
              aria-label={`View ${roomsData[index].name}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
