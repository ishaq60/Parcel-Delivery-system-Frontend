"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      text: "Excellent parcel delivery service. My packages arrived on time and in perfect condition. The team is very professional and responsive. I highly recommend this service to everyone.",
      image: "../../public/assets/professional-man-portrait.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "I have used many delivery services but this is the best. The pricing is competitive and the service quality is outstanding. It's the ideal solution for my business needs. Always reliable and on time.",
      image: "./../public/assets/professional-woman-portrait.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      text: "I shipped a parcel internationally and it arrived in just 3 days. The tracking system is transparent and reliable. Customer support is excellent. I will definitely use this service again.",
      image: "./../public/assets/professional-businessman-portrait.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url(/placeholder.svg?height=600&width=1400&query=business-people-meeting-conference)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Avatar */}
        <div className="mb-8 animate-fade-in">
          <img
            src={current.image || "/placeholder.svg"}
            alt={current.name}
            className="w-20 h-20 rounded-full mx-auto border-4 border-accent object-cover"
          />
        </div>

        {/* Testimonial Text */}
        <p className="text-white text-base md:text-lg leading-relaxed mb-6 animate-slide-in-up">{current.text}</p>

        {/* Name */}
        <h3
          className="text-white font-bold text-lg md:text-xl mb-8 animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {current.name}
        </h3>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 border-2 border-white text-white rounded hover:bg-white hover:text-primary transition-colors"
          >
            <ChevronLeft size={20} className="mx-auto" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 border-2 border-white text-white rounded hover:bg-white hover:text-primary transition-colors"
          >
            <ChevronRight size={20} className="mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
