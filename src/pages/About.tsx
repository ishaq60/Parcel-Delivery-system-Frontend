import { Zap, Globe, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Zap />, title: 'Fast Delivery', description: 'Swift and reliable parcel delivery services' },
    { icon: <Heart />, title: 'Customer Care', description: 'Dedicated support for every customer' },
    { icon: <ShieldCheck />, title: 'Secure', description: 'Protected parcels with insurance coverage' },
    { icon: <Globe />, title: 'Worldwide', description: 'Delivery services across the globe' },
  ];

  const stats = [
    { number: '50K+', label: 'Parcels Delivered', delay: '0ms' },
    { number: '10K+', label: 'Happy Customers', delay: '100ms' },
    { number: '15+', label: 'Countries Served', delay: '200ms' },
    { number: '99.9%', label: 'Success Rate', delay: '300ms' },
  ];

  const teamMembers = [
    { name: 'Ishaq Ahmad', role: 'CEO & Founder', image: '👨‍💼' },
    { name: 'Ayesha Rahman', role: 'Operations Manager', image: '👩‍💼' },
    { name: 'Khan Samir', role: 'Tech Lead', image: '👨‍💻' },
    { name: 'Fatima Ali', role: 'Customer Success', image: '👩‍💼' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center animate-fadeInDown">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full font-bold text-sm" style={{backgroundColor: 'rgba(245, 166, 35, 0.1)', color: '#F5A623'}}>
              ℹ️ ABOUT US
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Reliable Parcel <span style={{color: '#F5A623'}}>Delivery</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to delivering your parcels safely and on time. With cutting-edge technology and dedicated customer service, we ensure your shipments reach their destination with care.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeInUp" style={{animationDelay: '100ms'}}>
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#F5A623]/10 to-transparent border-2" style={{borderColor: 'rgba(245, 166, 35, 0.2)'}}>
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold mb-4" style={{color: '#2c2c2c'}}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize parcel delivery by providing fast, secure, and affordable shipping solutions that connect businesses and customers across the globe. We believe in making logistics simple and accessible to everyone.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-transparent border-2" style={{borderColor: 'rgba(245, 166, 35, 0.2)'}}>
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-3xl font-bold mb-4" style={{color: '#2c2c2c'}}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted parcel delivery platform in Asia, known for innovation, reliability, and exceptional customer service. We aim to set new standards in the logistics industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl text-center bg-white border-2 border-gray-100 hover:border-[#F5A623] hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#F5A623'}}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Core <span style={{color: '#F5A623'}}>Values</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-white border-2 border-gray-100 hover:border-[#F5A623] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group animate-fadeInUp"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#F5A623'}}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Meet Our <span style={{color: '#F5A623'}}>Team</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#F5A623] hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-gradient-to-r from-[#F5A623]/20 to-[#2c2c2c]/20 p-8 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold" style={{color: '#F5A623'}}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-[#2c2c2c] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp" style={{animationDelay: '200ms'}}>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Better Delivery?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their valuable parcels.
          </p>
          <button className="px-10 py-4 rounded-lg font-bold text-white text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg" style={{backgroundColor: '#F5A623'}}>
            Send Your First Parcel
          </button>
        </div>
      </section>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}