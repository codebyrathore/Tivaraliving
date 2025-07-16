"use client"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Globe } from "lucide-react"
import { useLanguage } from "./language-provider"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
  { code: "te", name: "తెలుగు", flag: "🇮🇳" },
  { code: "bn", name: "বাংলা", flag: "🇮🇳" },
]

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-40">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span>{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center space-x-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
