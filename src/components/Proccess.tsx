"use client"

import { Package, MapPin, Truck, CheckCircle } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Book Your Delivery",
      description:
        "Enter parcel details and select your preferred delivery option through our easy-to-use platform.",
      icon: Package,
    },
    {
      number: "2",
      title: "Schedule Pickup",
      description:
        "Choose a convenient time for our delivery personnel to collect your parcel from your location.",
      icon: MapPin,
    },
    {
      number: "3",
      title: "Track in Real-Time",
      description:
        "Monitor your parcel's journey with live updates and GPS tracking throughout the delivery process.",
      icon: Truck,
    },
    {
      number: "4",
      title: "Receive Confirmation",
      description:
        "Get instant notification when your parcel is successfully delivered to its destination.",
      icon: CheckCircle,
    },
  ]

  return (
    <section
      className="relative w-full py-20 md:py-32 bg-cover bg-center overflow-hidden"
     
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
          <span className="text-[#F5A623] font-bold text-sm tracking-widest block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#F5A623]">4-Step</span> Delivery Process
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From booking to confirmation, we make parcel delivery seamless and stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative group opacity-0 animate-[slideUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#F5A623]/50 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#F5A623]/20 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E59512] rounded-full flex items-center justify-center shadow-lg shadow-[#F5A623]/50 group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-10 h-10 text-[#F5A623]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#F5A623] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-0.5 h-10 bg-gradient-to-b from-[#F5A623]/40 to-transparent"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
          <button className="bg-[#F5A623] hover:bg-[#E59512] text-white font-bold px-12 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#F5A623]/50 text-lg">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
