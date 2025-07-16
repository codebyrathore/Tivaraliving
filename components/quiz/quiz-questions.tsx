"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuizProgress } from "./quiz-progress"
import type { QuizAnswer } from "./wellness-quiz"

interface QuizQuestionsProps {
  onComplete: (answers: QuizAnswer[]) => void
}

const questions = [
  {
    id: 1,
    category: "Physical Constitution",
    question: "How would you describe your natural body frame?",
    options: [
      { text: "Thin, light, find it hard to gain weight", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Medium build, muscular, moderate weight", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Large frame, gain weight easily, strong build", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 2,
    category: "Energy Patterns",
    question: "How is your energy throughout the day?",
    options: [
      { text: "Comes in bursts, can crash suddenly", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Steady and intense, can burn out from overwork", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Slow to start but steady, can feel sluggish", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 3,
    category: "Digestion",
    question: "How is your appetite and digestion?",
    options: [
      { text: "Variable appetite, sometimes forget to eat", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Strong appetite, get irritable when hungry", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Steady appetite, can skip meals easily", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 4,
    category: "Sleep Patterns",
    question: "How do you typically sleep?",
    options: [
      { text: "Light sleeper, mind races, wake up easily", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Moderate sleep, wake up refreshed", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Deep sleeper, hard to wake up, need lots of sleep", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 5,
    category: "Stress Response",
    question: "How do you typically respond to stress?",
    options: [
      { text: "Become anxious, worried, scattered", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Become irritated, angry, critical", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Withdraw, become stubborn, avoid confrontation", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 6,
    category: "Weather Preferences",
    question: "What weather do you prefer?",
    options: [
      { text: "Warm, humid weather; dislike cold and wind", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Cool, dry weather; dislike heat and humidity", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Warm, dry weather; dislike cold and damp", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 7,
    category: "Learning Style",
    question: "How do you prefer to learn new things?",
    options: [
      { text: "Learn quickly but forget easily, need repetition", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Learn at moderate pace with good retention", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Learn slowly but remember for long time", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 8,
    category: "Communication",
    question: "How do you typically communicate?",
    options: [
      { text: "Talk quickly, jump between topics", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Speak clearly, directly, can be sharp", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Speak slowly, thoughtfully, gentle tone", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 9,
    category: "Decision Making",
    question: "How do you make decisions?",
    options: [
      { text: "Change mind frequently, indecisive", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Make decisions quickly and stick to them", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Take time to decide, resist change", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 10,
    category: "Physical Activity",
    question: "What type of exercise do you prefer?",
    options: [
      { text: "Gentle, flowing activities like yoga or walking", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Competitive, intense activities", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Steady, endurance activities", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 11,
    category: "Living Space",
    question: "How do you prefer your living space?",
    options: [
      { text: "Warm, cozy, with soft textures and dim lighting", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Cool, well-ventilated, organized and functional", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Spacious, comfortable, with natural materials", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 12,
    category: "Colors",
    question: "Which colors do you feel most drawn to?",
    options: [
      { text: "Warm, earthy colors like orange, yellow, red", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Cool colors like blue, green, white", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Bright, stimulating colors like red, orange, yellow", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 13,
    category: "Meditation",
    question: "What type of meditation appeals to you most?",
    options: [
      { text: "Guided meditation with gentle music", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Focused concentration practices", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Active meditation like walking or chanting", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 14,
    category: "Routine",
    question: "How do you feel about daily routines?",
    options: [
      { text: "Prefer flexibility, routines feel restrictive", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Like structured routines that support goals", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Comfortable with routines once established", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
  {
    id: 15,
    category: "Emotional Nature",
    question: "How would you describe your emotional nature?",
    options: [
      { text: "Sensitive, empathetic, can be anxious", score: { vata: 3, pitta: 0, kapha: 0 } },
      { text: "Passionate, determined, can be intense", score: { vata: 0, pitta: 3, kapha: 0 } },
      { text: "Calm, steady, can be possessive", score: { vata: 0, pitta: 0, kapha: 3 } },
    ],
  },
]

export function QuizQuestions({ onComplete }: QuizQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [selectedOption, setSelectedOption] = useState<string>("")

  const handleAnswer = () => {
    if (!selectedOption) return

    const question = questions[currentQuestion]
    const option = question.options.find((opt) => opt.text === selectedOption)

    if (option) {
      const newAnswer: QuizAnswer = {
        questionId: question.id,
        answer: selectedOption,
        score: option.score,
      }

      const newAnswers = [...answers, newAnswer]
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption("")
      } else {
        onComplete(newAnswers)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
      setSelectedOption("")
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="max-w-3xl mx-auto">
      <QuizProgress currentQuestion={currentQuestion + 1} totalQuestions={questions.length} />

      <div className="card-spiritual">
        <div className="mb-6">
          <span className="text-emerald-600 font-medium text-sm">{question.category}</span>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-stone-800 mt-2">{question.question}</h2>
        </div>

        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option.text)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedOption === option.text
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-stone-200 hover:border-stone-300 hover:bg-stone-50"
              }`}
            >
              <span className="text-stone-800">{option.text}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestion === 0}
            className="px-6 bg-transparent"
          >
            Previous
          </Button>
          <Button onClick={handleAnswer} disabled={!selectedOption} className="btn-primary px-6">
            {currentQuestion === questions.length - 1 ? "Get My Results" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  )
}
