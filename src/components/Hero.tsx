"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router"

export default function Hero() {
  const [trackingId, setTrackingId] = useState("")
  const [email, setEmail] = useState("")

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#F5A623]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center z-10">
        {/* Icon with glow effect */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-[#F5A623] rounded-full flex items-center justify-center mx-auto bg-[#F5A623]/10 backdrop-blur-sm shadow-lg shadow-[#F5A623]/50">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-[#F5A623]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* Tagline */}
        <div
          className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-4 sm:mb-6 text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide opacity-0 animate-[slideUp_0.6s_ease-out_0.1s_forwards]"
        >
          <span>FAST</span>
          <span>•</span>
          <span>SECURED</span>
          <span>•</span>
          <span>WORLDWIDE</span>
        </div>

        {/* Headline with enhanced styling */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-5xl px-4 opacity-0 animate-[slideUp_0.6s_ease-out_0.2s_forwards]"
          style={{ 
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
          }}
        >
          Awesome Template For <br className="hidden sm:block" />
          <span className="text-[#F5A623] drop-shadow-[0_0_30px_rgba(245,166,35,0.5)]">Courier & Delivery</span> Services
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-200 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 px-4 opacity-0 animate-[slideUp_0.6s_ease-out_0.25s_forwards]"
        >
          Fast, Secure & Reliable Parcel Delivery Worldwide
        </p>

        {/* Tracking Card with glassmorphism */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-6xl px-4">
          <div
            className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full shadow-2xl border border-white/20 opacity-0 animate-[slideUp_0.6s_ease-out_0.3s_forwards]"
          >
            <div className="mb-4 sm:mb-6 text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="text-[#F5A623] text-xl sm:text-2xl">▪</span> 
                <span className="text-sm sm:text-base md:text-xl">TRACK YOUR PRODUCT</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-1 sm:mt-2">
                Now you can track your product easily
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Input fields */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Order ID"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-4 border border-white/30 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:bg-white/30 transition-all text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-4 border border-white/30 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:bg-white/30 transition-all text-sm sm:text-base"
                />
              </div>
              
              {/* Track button - full width on mobile */}
              <button className="w-full sm:w-auto bg-[#F5A623] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#E59512] hover:shadow-lg hover:shadow-[#F5A623]/50 transition-all transform hover:scale-105 text-sm sm:text-base">
                TRACK YOUR PRODUCT
              </button>
            </div>
          </div>

          {/* Action Buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full sm:w-auto opacity-0 animate-[slideUp_0.6s_ease-out_0.35s_forwards]">
            <Link to="/login" className="w-full sm:w-auto">
              <button className="w-full bg-[#F5A623] hover:bg-[#E59512] text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#F5A623]/50 text-sm sm:text-base">
                SEND A PARCEL
              </button>
            </Link>
            <button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on small screens */}
      <div className="hidden md:flex absolute bottom-6 sm:bottom-8 right-4 sm:right-8 gap-3 sm:gap-4">
        <button className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-white text-white rounded hover:bg-white hover:text-[#F5A623] transition-colors">
          <ChevronLeft size={20} className="mx-auto" />
        </button>
        <button className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-white text-white rounded hover:bg-white hover:text-[#F5A623] transition-colors">
          <ChevronRight size={20} className="mx-auto" />
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        /* Ensure proper text wrapping on small screens */
        @media (max-width: 640px) {
          h1 {
            word-wrap: break-word;
            hyphens: auto;
          }
        }
      `}</style>
    </section>
  )
}