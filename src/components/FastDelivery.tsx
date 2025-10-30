


export default function FastestDelivery() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get The <span className="text-accent">Fastest</span> Parcel Delivery
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
              We provide the fastest and most reliable parcel delivery service worldwide. Our experienced team and
              modern technology ensure your parcels arrive on time and in perfect condition. We deliver to over 150
              countries with real-time tracking and professional handling.
            </p>
            <button className="bg-[#F5A623]  text-white font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity">
              LEARN MORE
            </button>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <img src="../../public/assets/delivery-person-running-with-packages-bangladesh.jpg" alt="Fast Delivery" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
