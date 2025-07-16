import type { Metadata } from "next"
import { WellnessQuiz } from "@/components/quiz/wellness-quiz"

export const metadata: Metadata = {
  title: "Wellness Quiz - Discover Your Dosha | Tivara Living",
  description:
    "Take our comprehensive wellness quiz to discover your Ayurvedic constitution and get personalized product recommendations for your unique needs.",
}

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <WellnessQuiz />
    </div>
  )
}
