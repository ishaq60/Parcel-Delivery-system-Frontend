import { Calendar, User } from "lucide-react";

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
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#2c2c2c]">
          Parcel Delivery Blog
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold mb-2 text-[#f5a623]">{post.title}</h2>
                <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
                  <span className="flex items-center gap-1">
                    <User size={16} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
