import { DollarSign, Headphones } from "lucide-react"

export default function AboutUs() {
  const features = [
    {
      icon: "⚡",
      title: "FAST DELIVERY",
      description: "We ensure delivery within 24 hours in major cities and 3–5 days across the country.",
    },
    {
      icon: "🔒",
      title: "SECURED SERVICE",
      description: "Your parcel is completely safe and secure with us. We provide full insurance coverage.",
    },
    {
      icon: "🌍",
      title: "NATIONWIDE SHIPPING",
      description: "We deliver parcels to any part of the country. Our network is spread nationwide.",
    },
    {
      icon: DollarSign,
      title: "AFFORDABLE PRICING",
      description: "Competitive rates with no hidden fees. Pay only for what you ship.",
    },
    {
      icon: Headphones,
      title: "24/7 SUPPORT",
      description: "Our customer support team is always available to assist you.",
    },
  ]

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="animate-slide-in-left">
            <img
              src="/assets/white-delivery-van-professional-logistics.jpg"
              alt="Delivery Van"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">ABOUT US</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Parcel Delivery System is a leading parcel delivery service provider. Since 2015, we’ve earned the trust
              of thousands of customers by providing fast, secure, and reliable parcel delivery services nationwide.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const isStringIcon = typeof Icon === "string"

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#F5A623]/10">
                      {isStringIcon ? (
                        <span className="text-2xl">{Icon}</span> // ✅ emoji
                      ) : (
                        <Icon className="w-5 h-5 text-[#F5A623]" /> // ✅ Lucide icon
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[#F5A623]/40 my-16 rounded"></div>
      </div>
    </section>
  )
}
