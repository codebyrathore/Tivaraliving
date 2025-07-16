"use client"

import { useState } from "react"
import { QuizIntro } from "./quiz-intro"
import { QuizQuestions } from "./quiz-questions"
import { QuizResults } from "./quiz-results"

export interface QuizAnswer {
  questionId: number
  answer: string
  score: {
    vata: number
    pitta: number
    kapha: number
  }
}

export interface QuizResult {
  primaryDosha: string
  secondaryDosha: string
  scores: {
    vata: number
    pitta: number
    kapha: number
  }
  recommendations: {
    body: string[]
    space: string[]
    mind: string[]
  }
  description: string
}

export function WellnessQuiz() {
  const [currentStep, setCurrentStep] = useState<"intro" | "questions" | "results">("intro")
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [result, setResult] = useState<QuizResult | null>(null)

  const handleStartQuiz = () => {
    setCurrentStep("questions")
  }

  const handleQuizComplete = (quizAnswers: QuizAnswer[]) => {
    setAnswers(quizAnswers)

    // Calculate dosha scores
    const totalScores = quizAnswers.reduce(
      (acc, answer) => ({
        vata: acc.vata + answer.score.vata,
        pitta: acc.pitta + answer.score.pitta,
        kapha: acc.kapha + answer.score.kapha,
      }),
      { vata: 0, pitta: 0, kapha: 0 },
    )

    // Determine primary and secondary doshas
    const sortedDoshas = Object.entries(totalScores)
      .sort(([, a], [, b]) => b - a)
      .map(([dosha]) => dosha)

    const primaryDosha = sortedDoshas[0]
    const secondaryDosha = sortedDoshas[1]

    // Generate recommendations based on primary dosha
    const recommendations = generateRecommendations(primaryDosha, secondaryDosha)
    const description = getDoshaDescription(primaryDosha, secondaryDosha)

    const quizResult: QuizResult = {
      primaryDosha,
      secondaryDosha,
      scores: totalScores,
      recommendations,
      description,
    }

    setResult(quizResult)
    setCurrentStep("results")
  }

  const handleRetakeQuiz = () => {
    setCurrentStep("intro")
    setAnswers([])
    setResult(null)
  }

  return (
    <div className="container-custom py-12">
      {currentStep === "intro" && <QuizIntro onStart={handleStartQuiz} />}
      {currentStep === "questions" && <QuizQuestions onComplete={handleQuizComplete} />}
      {currentStep === "results" && result && <QuizResults result={result} onRetake={handleRetakeQuiz} />}
    </div>
  )
}

function generateRecommendations(primary: string, secondary: string) {
  const recommendations = {
    vata: {
      body: ["Ashwagandha Stress Relief Capsules", "Warming Golden Milk Blend", "Nourishing Body Oil with Sesame"],
      space: ["Grounding Earth Element Diffuser", "Warm Amber Lighting Collection", "Cozy Meditation Cushions"],
      mind: ["Calming Meditation Audio Series", "Grounding Breathwork Guide", "Anxiety Relief Essential Oil Blend"],
    },
    pitta: {
      body: ["Cooling Aloe Vera Supplements", "Digestive Fire Balance Tea", "Coconut Oil Body Moisturizer"],
      space: ["Cooling Blue Light Therapy", "Natural Ventilation Enhancers", "Calming Water Feature"],
      mind: ["Anger Management Meditation", "Cooling Pranayama Techniques", "Stress Relief Aromatherapy"],
    },
    kapha: {
      body: ["Energizing Ginger Turmeric Blend", "Metabolism Boost Supplements", "Invigorating Body Scrub"],
      space: ["Bright Light Therapy Lamps", "Air Purifying Plants Collection", "Energizing Color Therapy"],
      mind: ["Motivational Meditation Series", "Energy Boosting Breathwork", "Uplifting Essential Oil Blends"],
    },
  }

  return recommendations[primary as keyof typeof recommendations] || recommendations.vata
}

function getDoshaDescription(primary: string, secondary: string) {
  const descriptions = {
    vata: "You have a Vata-dominant constitution, characterized by creativity, flexibility, and quick thinking. You may experience occasional anxiety, dry skin, and irregular digestion. Focus on grounding, warming, and nourishing practices.",
    pitta:
      "You have a Pitta-dominant constitution, characterized by intelligence, focus, and strong digestion. You may experience occasional irritability, inflammation, and heat sensitivity. Focus on cooling, calming, and moderating practices.",
    kapha:
      "You have a Kapha-dominant constitution, characterized by stability, strength, and calm nature. You may experience occasional sluggishness, weight gain, and congestion. Focus on energizing, warming, and stimulating practices.",
  }

  const primaryDesc = descriptions[primary as keyof typeof descriptions] || descriptions.vata
  return `${primaryDesc} Your secondary dosha is ${secondary}, which adds additional nuances to your constitution.`
}
