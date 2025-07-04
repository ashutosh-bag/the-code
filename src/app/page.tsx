"use client"
import About from "@/layouts/About"
import BookNow from "@/layouts/BookNow"
import Breadcrumb from "@/layouts/Breadcrumb"
import Experiences from "@/layouts/Experiences"
import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"
import Rooms from "@/layouts/Rooms"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Breadcrumb />
      <Rooms />
      <Experiences />
      <About />
      <BookNow />
      <Footer />
      <WhatsAppButton
        phoneNumber="+919090040333"
        message="Hello! I'm interested in booking a room at The Code Exclusive."
      />
    </main>
  )
}
