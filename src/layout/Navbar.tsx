

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { Link } from "react-router"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      // Add your search logic here
      alert(`Searching for: ${searchQuery}`)
      setSearchQuery("")
      setSearchOpen(false)
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div
        className="hidden md:flex px-6 py-3 justify-between items-center text-sm"
        style={{ backgroundColor: "#2c2c2c", color: "#ffffff" }}
      >
        <div className="flex gap-8">
          <Link to="/sitemap" className="hover:text-[#f5a623] transition-colors">
            SITEMAP
          </Link>
          <Link to="/privacy" className="text-[#f5a623] font-semibold">
            PRIVACY
          </Link>
          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-[#f5a623] transition-colors cursor-pointer"
          >
            PRICING
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span>📞 CALL US NOW: </span>
          <span className="font-bold" style={{ color: "#f5a623" }}>
            +880-1755-390-370
          </span>
        </div>
        <Link
          to="/signin"
          className="px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#f5a623", color: "#ffffff" }}
        >
          SIGN IN
        </Link>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300`}
        style={{ backgroundColor: isScrolled ? "#ffffff" : "#ffffff", boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: "#2c2c2c", color: "#ffffff" }}
            >
              P
            </div>
            <span style={{ color: "#f5a623" }}>ARCEL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/"
             
              className="font-bold hover:opacity-80 transition-opacity"
              style={{ color: "#f5a623" }}
            >
              HOME
            </Link>
            <Link to={"/about"} >
            <button  className="hover:text-[#f5a623] text-left" style={{ color: "#2c2c2c" }}>
              ABOUT
            </button>
            </Link>
            <button
              onClick={() => scrollToSection("tracking")}
              className="hover:text-[#f5a623] transition-colors"
              style={{ color: "#2c2c2c" }}
            >
              TRACKING
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-[#f5a623] transition-colors"
              style={{ color: "#2c2c2c" }}
            >
              PRICING
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#f5a623] transition-colors"
              style={{ color: "#2c2c2c" }}
            >
              CONTACT
            </button>
            <Link
              to="/blog"
              className="hover:text-[#f5a623] transition-colors"
              style={{ color: "#2c2c2c" }}
            >
              BLOG
            </Link>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded hover:bg-[#f5a623] hover:text-[#ffffff] transition-colors border-2"
              style={{ borderColor: "#f5a623", color: searchOpen ? "#ffffff" : "#f5a623", backgroundColor: searchOpen ? "#f5a623" : "transparent" }}
            >
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t" style={{ backgroundColor: "#ffffff", borderColor: "#e5e5e5" }}>
            <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-4 md:px-6 py-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, tracking, etc..."
                  className="flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#f5a623]"
                  style={{ borderColor: "#e5e5e5" }}
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#f5a623", color: "#ffffff" }}
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="px-4 py-2 rounded-lg border-2 hover:bg-gray-100 transition-colors"
                  style={{ borderColor: "#e5e5e5", color: "#2c2c2c" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden p-4 flex flex-col gap-4 animate-slide-in-up" style={{ backgroundColor: "#f5f5f5" }}>
            <button onClick={() => scrollToSection("home")} className="font-bold text-left" style={{ color: "#f5a623" }}>
              HOME
            </button>
          <Link to={"/about"} >
            <button  className="hover:text-[#f5a623] text-left" style={{ color: "#2c2c2c" }}>
              ABOUT
            </button>
          </Link>
            <button onClick={() => scrollToSection("tracking")} className="hover:text-[#f5a623] text-left" style={{ color: "#2c2c2c" }}>
              TRACKING
            </button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-[#f5a623] text-left" style={{ color: "#2c2c2c" }}>
              PRICING
            </button>
         
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#f5a623] text-left" style={{ color: "#2c2c2c" }}>
              CONTACT
  </button>
            <Link to="/blog" className="hover:text-[#f5a623]" style={{ color: "#2c2c2c" }}>
              BLOG
            </Link>
            <div className="pt-4 border-t" style={{ borderColor: "#e5e5e5" }}>
              <form onSubmit={handleSearch} className="flex flex-col gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#f5a623]"
                  style={{ borderColor: "#e5e5e5" }}
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#f5a623", color: "#ffffff" }}
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}