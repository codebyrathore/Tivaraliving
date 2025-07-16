"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    { id: "body", name: "Tivara Body", count: 24 },
    { id: "space", name: "Tivara Space", count: 18 },
    { id: "mind", name: "Tivara Mind", count: 32 },
    { id: "gifts", name: "Gift Sets", count: 12 },
  ]

  const benefits = [
    { id: "stress-relief", name: "Stress Relief" },
    { id: "energy-boost", name: "Energy Boost" },
    { id: "better-sleep", name: "Better Sleep" },
    { id: "mental-clarity", name: "Mental Clarity" },
    { id: "immune-support", name: "Immune Support" },
  ]

  return (
    <div className="space-y-8">
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCategories([...selectedCategories, category.id])
                    } else {
                      setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
                    }
                  }}
                />
                <label htmlFor={category.id} className="text-stone-700 cursor-pointer">
                  {category.name}
                </label>
              </div>
              <span className="text-sm text-stone-500">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={5} className="w-full" />
          <div className="flex justify-between text-sm text-stone-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">Benefits</h3>
        <div className="space-y-3">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center space-x-2">
              <Checkbox id={benefit.id} />
              <label htmlFor={benefit.id} className="text-stone-700 cursor-pointer">
                {benefit.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button className="btn-secondary w-full">Clear All Filters</Button>
    </div>
  )
}
