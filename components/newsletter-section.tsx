"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Gift, Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-emerald-50 via-amber-50 to-stone-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="card-spiritual text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Join the Tivara Healing Circle
            </h2>

            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Receive weekly wellness wisdom, exclusive product launches, personalized Ayurvedic tips, and special
              offers delivered directly to your inbox.
            </p>

            {!isSubscribed ? (
              <>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 py-3 rounded-full border-emerald-200 focus:border-emerald-500 bg-white"
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="btn-primary whitespace-nowrap px-8" disabled={isLoading}>
                    {isLoading ? "Joining..." : "Join Circle"}
                  </Button>
                </form>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-emerald-600" />
                    <span>Welcome gift included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Exclusive content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-stone-600" />
                    <span>Weekly wellness tips</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-green-700 mb-2">Welcome to the Healing Circle!</h3>
                <p className="text-stone-600 mb-4">
                  Check your email for a special welcome gift and your first wellness guide.
                </p>
                <p className="text-sm text-stone-500">You'll receive your first newsletter within 24 hours.</p>
              </div>
            )}

            <p className="text-sm text-stone-500">No spam, only healing wisdom. Unsubscribe anytime with one click.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
