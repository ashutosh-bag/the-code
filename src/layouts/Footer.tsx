import Link from "next/link"
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <h2 className="text-2xl font-serif text-[#dcbe8b] tracking-wide">THE CODE EXCLUSIVE</h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              An exclusive sanctuary for those who seek refined experiences and discreet luxury.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#dcbe8b] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#dcbe8b] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#dcbe8b] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#dcbe8b] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#rooms" className="text-gray-400 hover:text-[#dcbe8b] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="text-gray-400 hover:text-[#dcbe8b] transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#dcbe8b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#book-now" className="text-gray-400 hover:text-[#dcbe8b] transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#dcbe8b] mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#dcbe8b] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Plot no- 3478, Patharagadia, Bhubaneswar- 751024</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#dcbe8b] mr-3 flex-shrink-0" />
                <Link href="tel:+919090040333" className="text-gray-400 hover:text-[#dcbe8b] transition-colors">
                  9090040333
                </Link>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#dcbe8b] mr-3 flex-shrink-0" />
                <Link href="tel:+919776336000" className="text-gray-400 hover:text-[#dcbe8b] transition-colors">
                  9776336000
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#dcbe8b] mr-3 flex-shrink-0" />
                <Link href="mailto:stay@thecode.com" className="text-gray-400 hover:text-[#dcbe8b] transition-colors">
                  stay@thecode.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#dcbe8b] mb-6">Our Location</h3>
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15501164.828050887!2d70.41291145000001!3d18.4626269931449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908dbc29fe4ef%3A0xaa97b92077d34609!2sHotel%20The%20Code%20Exclusive!5e0!3m2!1sen!2sin!4v1748339917126!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel The Code Exclusive Location"
              />
            </div>
            <p className="text-gray-400 text-xs mt-3">Click to view directions and explore the area</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} The Code Hotel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-[#dcbe8b] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#dcbe8b] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
