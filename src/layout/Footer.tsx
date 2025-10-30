"use client"


import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: "#2c2c2c", color: "#ffffff" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="animate-slide-in-up">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                style={{ backgroundColor: "#ffffff", color: "#2c2c2c" }}
              >
                P
              </div>
              <span style={{ color: "#f5a623" }}>ARCEL</span>
            </Link>
            <p className="text-sm text-gray-400">Your trusted global delivery partner</p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-6 text-white">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">SITEMAP</Link></li>
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">PRICING</Link></li>
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">PAYMENT METHOD</Link></li>
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">SUPPORT</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-6 text-white">IMPORTANT LINKS</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">ABOUT US</Link></li>
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">TERMS</Link></li>
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">PRIVACY</Link></li>
              <li><Link to="#" className="hover:text-[#f5a623] transition-colors">BLOG</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-6 text-white">GET IN TOUCH</h4>
            <div className="flex gap-4 mb-6">
              {[
                <Facebook key="fb" />,
                <Twitter key="tw" />,
                <Linkedin key="ln" />,
                <Instagram key="ig" />,
              ].map((Icon, index) => (
                <Link
                  key={index}
                  to="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    border: "1px solid #ffffff",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5a623"
                    e.currentTarget.style.color = "#2c2c2c"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#ffffff"
                  }}
                >
                  {Icon}
                </Link>
              ))}
            </div>

            {/* Payment Logos */}
            <div className="flex gap-2">
              <img src="/paypal-logo.png" alt="PayPal" className="h-6" />
              <img src="/mastercard-logo.jpg" alt="Mastercard" className="h-6" />
              <img src="/visa-logo.jpg" alt="Visa" className="h-6" />
              <img src="/amex-logo.jpg" alt="Amex" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="border-t px-4 md:px-6 py-6"
        style={{ borderColor: "#555555", color: "#cccccc" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© Copyright 2025. All rights reserved</p>
          <p>
            Design and ❤️ by <span style={{ color: "#f5a623" }}>Parcel Team</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
