"use client";

export default function BookNow() {
  return (
    <section id="book-now" className="bg-[#0e0e11] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#dcbe8b] mb-4">
          Ready to Book Your Stay?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
         {` We’re`} just a message away. Please click the WhatsApp icon at the bottom right to book your room, ask questions, or check availability.
        </p>

        <div className="bg-[#111113] border border-gray-800 rounded-sm p-6 text-left text-sm text-gray-400 max-w-md mx-auto">
          <p className="mb-2 text-white font-semibold">Available Rooms:</p>
          <ul className="space-y-2">
            <li>
              <span className="text-[#dcbe8b] font-medium">The Classic  Room</span> – ₹1500/night
            </li>
            <li>
              <span className="text-[#dcbe8b] font-medium">The Deluxe Room</span> – ₹1800/night
            </li>
            <li>
              <span className="text-[#dcbe8b] font-medium">The Super Deluxe Room</span> – ₹2200/night
            </li>
            <li>
              <span className="text-[#dcbe8b] font-medium">The Party Room</span> – ₹5000/night
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
