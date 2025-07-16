interface QuizProgressProps {
  currentQuestion: number
  totalQuestions: number
}

export function QuizProgress({ currentQuestion, totalQuestions }: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-stone-600">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-emerald-600">{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full bg-stone-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-emerald-500 to-amber-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
