

import type React from "react"

import { useState } from "react"

export default function CostCalculator() {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    depth: "",
    weight: "",
    location: "usa",
    package: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const calculateCost = () => {
    // Simple calculation logic
    const basePrice = 50
    const weight = Number.parseFloat(formData.weight) || 0
    const total = basePrice + weight * 10
    return total.toFixed(2)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <img 
              src="/assets/delivery-person-with-packages-professional.jpg" 
              alt="Calculate Cost" 
              className="w-full h-auto rounded-lg shadow-lg" 
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "https://images.unsplash.com/photo-1578575437980-ba2b2dd3b9ce?auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>

          {/* Form */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">CALCULATE YOUR COST</h2>
            <p className="text-muted mb-8">
              Enter your parcel dimensions and weight to get an instant shipping quote. Our transparent pricing ensures
              you know the exact cost upfront.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">HEIGHT (CM):</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Enter height"
                  className="w-full px-4 py-3 border border-border rounded  text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">WIDTH (CM):</label>
                <input
                  type="number"
                  name="width"
                  value={formData.width}
                  onChange={handleChange}
                  placeholder="Enter width"
                  className="w-full px-4 py-3 border border-border rounded bg-gray text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">DEPTH (CM):</label>
                <input
                  type="number"
                  name="depth"
                  value={formData.depth}
                  onChange={handleChange}
                  placeholder="Enter depth"
                  className="w-full px-4 py-3 border border-border rounded bg-gray text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">WEIGHT (KG):</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Enter weight"
                  className="w-full px-4 py-3 border border-border rounded bg-gray text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">LOCATION:</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded bg-gray text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">PACKAGE TYPE:</label>
                <input
                  type="text"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  placeholder="Select your package type"
                  className="w-full px-4 py-3 border border-border rounded bg-gray text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button className="w-full bg-[#f5a623] text-accent-foreground font-bold py-3 rounded hover:opacity-90 transition-opacity mt-6">
                TOTAL COST: ${calculateCost()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
