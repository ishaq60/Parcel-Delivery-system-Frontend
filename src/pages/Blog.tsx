import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Send a Parcel Safely in Bangladesh",
    excerpt:
      "Learn the best practices for packaging, labeling, and tracking your parcel to ensure safe delivery every time.",
    author: "Ishaq Ahmad",
    date: "2025-11-20",
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=crop&w=600&q=80",
    category: "Guide",
  },
  {
    id: 2,
    title: "Top 5 Fastest Delivery Services in 2025",
    excerpt:
      "A comparison of the leading parcel delivery companies in Bangladesh for speed, reliability, and customer service.",
    author: "Ayesha Rahman",
    date: "2025-11-18",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "Comparison",
  },
  {
    id: 3,
    title: "Why Choose Our Parcel Service?",
    excerpt:
      "Discover the unique features and customer-first approach that make us the best choice for your delivery needs.",
    author: "Parcel Team",
    date: "2025-11-15",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    category: "Company",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fadeInDown">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full font-bold text-sm" style={{backgroundColor: 'rgba(245, 166, 35, 0.1)', color: '#F5A623'}}>
              📰 LATEST UPDATES
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Parcel Delivery <span style={{color: '#F5A623'}}>Blog</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with tips, guides, and insights about parcel delivery services
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group animate-fadeInUp"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm" style={{color: '#F5A623'}}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#F5A623] transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & Date */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 gap-2">
                    <span className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{backgroundColor: '#F5A623'}}>
                        {post.author[0]}
                      </div>
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn border-2" style={{borderColor: '#F5A623', color: '#F5A623'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#F5A623'; e.currentTarget.style.color = 'white'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F5A623'}}>
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeInUp" style={{animationDelay: '300ms'}}>
          <div className="inline-block px-8 py-6 rounded-2xl" style={{backgroundColor: 'rgba(245, 166, 35, 0.05)'}}>
            <p className="text-gray-700 mb-4">Want to read more?</p>
            <button className="px-8 py-3 rounded-lg font-bold text-white hover:opacity-90 hover:scale-105 transition-all duration-300" style={{backgroundColor: '#F5A623'}}>
              View All Articles
            </button>
          </div>
        </div>
      </div>

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
