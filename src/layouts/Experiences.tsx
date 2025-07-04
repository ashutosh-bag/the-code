"use client"
import Image from "next/image"
import { Utensils, Droplet, Wine } from "lucide-react"

const experienceData = [
  {
    title: "Fine Dining",
    description:
      "Experience our secret menu at The Cipher, our Michelin-starred restaurant with seasonal ingredients and master techniques.",
    image: "/assets/1.jpeg",
    icon: Utensils,
    alt: "Fine Dining Experience",
  },
  {
    title: "Spa Retreat",
    description:
      "Rejuvenate at our luxurious spa featuring customized treatments, a thermal suite, and meditation spaces.",
    image: "/assets/3.jpeg",
    icon: Droplet,
    alt: "Spa Retreat Experience",
  },
  {
    title: "Rooftop Bar",
    description:
      "Sip signature cocktails at our exclusive rooftop bar while enjoying panoramic city views and live jazz.",
    image: "/assets/6.jpg",
    icon: Wine,
    alt: "Rooftop Bar Experience",
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="w-full bg-black text-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-[#dfc79d] font-serif  text-center mb-4">Curated Experiences</h2>
        <p className="text-center max-w-3xl mx-auto text-[#dfc79d] mb-16">
          Discover our collection of exclusive experiences designed to elevate your stay and create memories that linger
          long after you've checked out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {experienceData.map((experience, index) => (
            <div key={index} className="flex flex-col w-full">
              <div className="relative overflow-hidden w-full rounded-lg mb-6 group">
                <div className="h-96 w-full relative">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                <div className="absolute bottom-6 left-6">
                  <experience.icon className="w-8 h-8 text-yellow-50/90" />
                </div>
              </div>

              <h3 className="text-2xl font-serif text-yellow-50/90 mb-2">{experience.title}</h3>
              <p className="text-sm text-yellow-50/80 mb-4">{experience.description}</p>
              <a
                href="#"
                className="text-[#dfc79d] hover:text-yellow-300 transition-colors text-sm font-medium mt-auto"
              >
                Reserve Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
