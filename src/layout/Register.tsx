import { useState } from "react"
import { Mail, Lock, Eye, EyeOff, User, Phone, MapPin, ArrowRight, Package, Truck } from "lucide-react"
import { Link } from "react-router"

export default function SignUpPage() {
  const [userType, setUserType] = useState<"sender" | "receiver">("sender")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    if (!agreeToTerms) {
      alert("Please agree to the Terms & Conditions")
      return
    }
    console.log("Sign up attempt:", { userType, ...formData })
    alert(`Signing up as ${userType} with email: ${formData.email}`)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl mb-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: "#2c2c2c", color: "#ffffff" }}
            >
              P
            </div>
            <span style={{ color: "#f5a623" }}>ARCEL</span>
          </Link>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#2c2c2c" }}>
              Create Account
            </h1>
            <p className="text-gray-600">Join us for fast & reliable delivery</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3" style={{ color: "#2c2c2c" }}>
              I want to register as:
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setUserType("sender")}
                className={`p-4 border-2 rounded-lg transition-all ${
                  userType === "sender"
                    ? "border-[#f5a623] bg-[#f5a623]/10"
                    : "border-gray-300 hover:border-[#f5a623]/50"
                }`}
              >
                <Package
                  size={32}
                  className="mx-auto mb-2"
                  style={{ color: userType === "sender" ? "#f5a623" : "#6b7280" }}
                />
                <p
                  className="font-semibold text-sm"
                  style={{ color: userType === "sender" ? "#f5a623" : "#2c2c2c" }}
                >
                  Sender
                </p>
                <p className="text-xs text-gray-500 mt-1">Send parcels</p>
              </button>

              <button
                onClick={() => setUserType("receiver")}
                className={`p-4 border-2 rounded-lg transition-all ${
                  userType === "receiver"
                    ? "border-[#f5a623] bg-[#f5a623]/10"
                    : "border-gray-300 hover:border-[#f5a623]/50"
                }`}
              >
                <Truck
                  size={32}
                  className="mx-auto mb-2"
                  style={{ color: userType === "receiver" ? "#f5a623" : "#6b7280" }}
                />
                <p
                  className="font-semibold text-sm"
                  style={{ color: userType === "receiver" ? "#f5a623" : "#2c2c2c" }}
                >
                  Receiver
                </p>
                <p className="text-xs text-gray-500 mt-1">Receive parcels</p>
              </button>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#2c2c2c" }}>
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#f5a623] transition-colors"
                  style={{ borderColor: "#e5e5e5" }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#2c2c2c" }}>
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#f5a623] transition-colors"
                  style={{ borderColor: "#e5e5e5" }}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#2c2c2c" }}>
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#f5a623] transition-colors"
                  style={{ borderColor: "#e5e5e5" }}
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#2c2c2c" }}>
                Address
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your full address"
                  required
                  rows={3}
                  className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#f5a623] transition-colors resize-none"
                  style={{ borderColor: "#e5e5e5" }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#2c2c2c" }}>
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  required
                  className="w-full pl-12 pr-12 py-3 border-2 rounded-lg focus:outline-none focus:border-[#f5a623] transition-colors"
                  style={{ borderColor: "#e5e5e5" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#f5a623] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#2c2c2c" }}>
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full pl-12 pr-12 py-3 border-2 rounded-lg focus:outline-none focus:border-[#f5a623] transition-colors"
                  style={{ borderColor: "#e5e5e5" }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#f5a623] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-4 h-4 mt-1 rounded border-gray-300 text-[#f5a623] focus:ring-[#f5a623]"
              />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="font-semibold hover:underline" style={{ color: "#f5a623" }}>
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="font-semibold hover:underline" style={{ color: "#f5a623" }}>
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#f5a623" }}
            >
              Create Account
              <ArrowRight size={20} />
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: "#e5e5e5" }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="py-3 px-4 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: "#e5e5e5", color: "#2c2c2c" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="py-3 px-4 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                style={{ borderColor: "#e5e5e5", color: "#2c2c2c" }}
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-bold hover:underline"
              style={{ color: "#f5a623" }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image & Content */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ backgroundColor: "#2c2c2c" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c2c2c]/90 to-[#f5a623]/30"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-12 text-white">
          <div className="mb-8">
            <div
              className="w-24 h-24 border-4 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              style={{ borderColor: "#f5a623", backgroundColor: "rgba(245, 166, 35, 0.1)" }}
            >
              <svg
                className="w-12 h-12"
                style={{ color: "#f5a623" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-md">
            Whether you're sending or receiving, we've got you covered with our reliable delivery network
          </p>

          <div className="space-y-4 text-left max-w-sm">
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "rgba(245, 166, 35, 0.2)" }}
              >
                <span style={{ color: "#f5a623" }}>✓</span>
              </div>
              <div>
                <p className="font-semibold">For Senders</p>
                <p className="text-sm text-gray-300">Send parcels quickly and track in real-time</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "rgba(245, 166, 35, 0.2)" }}
              >
                <span style={{ color: "#f5a623" }}>✓</span>
              </div>
              <div>
                <p className="font-semibold">For Receivers</p>
                <p className="text-sm text-gray-300">Manage deliveries and stay updated</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "rgba(245, 166, 35, 0.2)" }}
              >
                <span style={{ color: "#f5a623" }}>✓</span>
              </div>
              <div>
                <p className="font-semibold">Secure & Fast</p>
                <p className="text-sm text-gray-300">Your packages are in safe hands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}