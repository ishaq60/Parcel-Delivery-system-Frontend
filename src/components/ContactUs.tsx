"use client"

export default function ContactUs() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-white relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/placeholder.svg?height=400&width=400&query=world-map-pattern)",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">CONTACT US</h2>
            <p className="text-muted mb-8">We are always at your service</p>

            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-foreground mb-3">MAIN OFFICE:</h4>
                <p className="text-muted">+1-800-123-4567</p>
                <p className="text-muted">+1-800-123-4568</p>
                <p className="text-muted text-sm">New York, USA</p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">BRANCH OFFICE:</h4>
                <p className="text-muted">+1-800-123-4569</p>
                <p className="text-muted">+1-800-123-4570</p>
                <p className="text-muted text-sm">Los Angeles, USA</p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">EMAIL:</h4>
                <p className="text-muted">support@parceldelivery.com</p>
                <p className="text-muted">info@parceldelivery.com</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <img
              src="../../public/assets//world-map-location-pins-logistics.jpg"
              alt="World Map"
              className="w-full h-96 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
