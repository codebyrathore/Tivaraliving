import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
  showText?: boolean
}

export function Logo({ size = "md", className, showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <div
        className={cn(
          "bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg",
          sizeClasses[size],
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={cn("text-white", size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-6 h-6")}
        >
          {/* Lotus-inspired design */}
          <path
            d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M12 14C12 14 16 18 16 22C16 22 12 20 12 20C12 20 8 22 8 22C8 18 12 14 12 14Z"
            fill="currentColor"
            opacity="0.6"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
      {showText && (
        <span className={cn("font-playfair font-bold text-stone-800", textSizeClasses[size])}>Tivara Living</span>
      )}
    </Link>
  )
}
