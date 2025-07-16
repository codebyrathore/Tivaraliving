"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Home, Brain } from "lucide-react"

interface QuizIntroProps {
  onStart: () => void
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <Sparkles className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-4">
          Discover Your Wellness Path
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Take our comprehensive wellness quiz to uncover your unique Ayurvedic constitution and receive personalized
          recommendations for your body, space, and mind.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="card-spiritual text-center">
          <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">Body Wellness</h3>
          <p className="text-stone-600 text-sm">
            Discover your dosha and get personalized nutrition, supplement, and self-care recommendations.
          </p>
        </div>
        <div className="card-spiritual text-center">
          <Home className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">Space Harmony</h3>
          <p className="text-stone-600 text-sm">
            Learn how to optimize your living environment using Vastu principles for better energy flow.
          </p>
        </div>
        <div className="card-spiritual text-center">
          <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">Mind Balance</h3>
          <p className="text-stone-600 text-sm">
            Get personalized meditation, mindfulness, and mental wellness practices for your unique needs.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h2 className="font-playfair text-2xl font-bold text-stone-800 mb-4">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-stone-700">Your primary and secondary dosha constitution</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-stone-700">Personalized product recommendations</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-stone-700">Custom wellness practices for your type</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-stone-700">Space optimization tips for your home</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-stone-700">Meditation and mindfulness guidance</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <span className="text-stone-700">Lifestyle recommendations for balance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-stone-600 mb-6">
          <strong>Takes 5-7 minutes</strong> • 15 thoughtful questions • Instant personalized results
        </p>
        <Button onClick={onStart} className="btn-primary text-lg px-8 py-3">
          Start Your Wellness Journey
        </Button>
      </div>
    </div>
  )
}
