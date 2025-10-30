"use client"


import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="animate-slide-in-up">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl mb-6">
              <div className="w-12 h-12 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-lg">
                P
              </div>
              <span className="text-accent">ARCEL</span>
            </Link>
            <p className="text-sm text-gray-400">Your trusted global delivery partner</p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  SITEMAP
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  PRICING
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  PAYMENT METHOD
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  SUPPORT
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-6">IMPORTANT LINKS</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  TERMS
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  PRIVACY
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition-colors">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-6">GET IN TOUCH</h4>
            <div className="flex gap-4 mb-6">
              <Link
                to="#"
                className="w-10 h-10 border border-primary-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 border border-primary-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 border border-primary-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 border border-primary-foreground rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>

            {/* Payment Methods */}
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
      <div className="border-t border-gray-700 px-4 md:px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Copyright 2025. All rights reserved</p>
          <p>Design and ❤️ by Parcel Team</p>
        </div>
      </div>
    </footer>
  )
}
