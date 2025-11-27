


import { Zap, Globe, BarChart3 } from 'lucide-react';

export default function FastestDelivery() {
  const features = [
    { icon: <Zap size={28} />, title: '⚡ Lightning Fast', description: 'Next-day delivery in major cities' },
    { icon: <Globe size={28} />, title: '🌍 Worldwide Network', description: 'Delivery to 150+ countries' },
    { icon: <BarChart3 size={28} />, title: '📊 Real-Time Tracking', description: 'Live GPS updates every step' },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-r from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-[#F5A623]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#2c2c2c]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fadeInLeft">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 rounded-full font-bold text-xs" style={{backgroundColor: 'rgba(245, 166, 35, 0.1)', color: '#F5A623'}}>
                ⚡ FASTEST IN INDUSTRY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get The <span style={{color: '#F5A623'}}>Fastest</span> Parcel Delivery
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We provide the fastest and most reliable parcel delivery service worldwide. Our experienced team and
              modern technology ensure your parcels arrive on time and in perfect condition. We deliver to over 150
              countries with real-time tracking and professional handling.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white border-2 border-gray-100 hover:border-[#F5A623] transition-all duration-300 group">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300" style={{color: '#F5A623'}}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#F5A623] transition-colors">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#F5A623] hover:bg-[#E59512] text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg shadow-md inline-block">
              LEARN MORE
            </button>
          </div>

          {/* Image */}
          <div className="animate-fadeInRight relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1578575437980-ba2b2dd3b9ce?auto=format&fit=crop&w=600&q=80" 
                alt="Fast Delivery" 
                className="w-full h-auto rounded-lg object-cover" 
              />
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">24hrs</div>
                  <p className="text-sm">Average Delivery Time</p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border-2 border-[#F5A623] animate-bounce" style={{animationDelay: '0.5s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F5A623]">50K+</div>
                <p className="text-xs text-gray-600 font-semibold">Parcels Daily</p>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border-2 border-[#F5A623]/30 animate-bounce" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2c2c2c]">99.9%</div>
                <p className="text-xs text-gray-600 font-semibold">On-Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}