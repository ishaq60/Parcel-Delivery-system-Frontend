import { Link } from "react-router";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6" style={{ color: "#2c2c2c" }}>
          Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Coming soon! Check back for updates on parcel delivery tips and industry news.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#f5a623", color: "#ffffff" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
