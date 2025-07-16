"use client"

import { Button } from "@/components/ui/button"
import type { QuizResult } from "./wellness-quiz"
import { Heart, Home, Brain, Download, Share2 } from "lucide-react"
import Link from "next/link"

interface QuizResultsProps {
  result: QuizResult
  onRetake: () => void
}

export function QuizResults({ result, onRetake }: QuizResultsProps) {
  const getDoshaColor = (dosha: string) => {
    switch (dosha) {
      case "vata":
        return "text-purple-600"
      case "pitta":
        return "text-red-600"
      case "kapha":
        return "text-blue-600"
      default:
        return "text-stone-600"
    }
  }

  const getDoshaBg = (dosha: string) => {
    switch (dosha) {
      case "vata":
        return "bg-purple-100"
      case "pitta":
        return "bg-red-100"
      case "kapha":
        return "bg-blue-100"
      default:
        return "bg-stone-100"
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Results Header */}
      <div className="text-center mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-4">Your Wellness Profile</h1>
        <p className="text-xl text-stone-600">Discover your unique path to balance and vitality</p>
      </div>

      {/* Dosha Results */}
      <div className="card-spiritual mb-8">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl font-bold text-stone-800 mb-4">Your Constitution</h2>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className={`px-6 py-3 rounded-full ${getDoshaBg(result.primaryDosha)}`}>
              <span className={`font-bold text-lg ${getDoshaColor(result.primaryDosha)} capitalize`}>
                Primary: {result.primaryDosha}
              </span>
            </div>
            <div className={`px-6 py-3 rounded-full ${getDoshaBg(result.secondaryDosha)}`}>
              <span className={`font-medium ${getDoshaColor(result.secondaryDosha)} capitalize`}>
                Secondary: {result.secondaryDosha}
              </span>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed max-w-2xl mx-auto">{result.description}</p>
        </div>

        {/* Dosha Scores */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Object.entries(result.scores).map(([dosha, score]) => (
            <div key={dosha} className="text-center">
              <div
                className={`w-20 h-20 rounded-full ${getDoshaBg(dosha)} flex items-center justify-center mx-auto mb-3`}
              >
                <span className={`font-bold text-xl ${getDoshaColor(dosha)}`}>{score}</span>
              </div>
              <h3 className={`font-playfair text-xl font-bold capitalize ${getDoshaColor(dosha)}`}>{dosha}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Body Recommendations */}
        <div className="card-spiritual">
          <div className="text-center mb-6">
            <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-stone-800">Tivara Body</h3>
            <p className="text-stone-600 text-sm">Nourish your physical wellness</p>
          </div>
          <div className="space-y-3 mb-6">
            {result.recommendations.body.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-stone-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/shop/body">
            <Button className="btn-primary w-full">Explore Body Products</Button>
          </Link>
        </div>

        {/* Space Recommendations */}
        <div className="card-spiritual">
          <div className="text-center mb-6">
            <Home className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-stone-800">Tivara Space</h3>
            <p className="text-stone-600 text-sm">Harmonize your environment</p>
          </div>
          <div className="space-y-3 mb-6">
            {result.recommendations.space.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-stone-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/shop/space">
            <Button className="btn-primary w-full">Explore Space Products</Button>
          </Link>
        </div>

        {/* Mind Recommendations */}
        <div className="card-spiritual">
          <div className="text-center mb-6">
            <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-stone-800">Tivara Mind</h3>
            <p className="text-stone-600 text-sm">Balance your mental wellness</p>
          </div>
          <div className="space-y-3 mb-6">
            {result.recommendations.mind.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-stone-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/shop/mind">
            <Button className="btn-primary w-full">Explore Mind Products</Button>
          </Link>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-primary">
            <Download className="w-5 h-5 mr-2" />
            Download Your Results
          </Button>
          <Button variant="outline">
            <Share2 className="w-5 h-5 mr-2" />
            Share Results
          </Button>
          <Button variant="outline" onClick={onRetake}>
            Retake Quiz
          </Button>
        </div>
        <p className="text-stone-600 text-sm">
          Want to learn more?{" "}
          <Link href="/blog" className="text-emerald-600 hover:underline">
            Explore our wellness journal
          </Link>{" "}
          for in-depth guidance.
        </p>
      </div>
    </div>
  )
}
