"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "hi" | "ta" | "te" | "bn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.shop": "Shop",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cart": "Cart",
    "nav.wishlist": "Wishlist",
    "nav.account": "Account",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.view": "View",
    "common.add": "Add",
    "common.remove": "Remove",

    // Product
    "product.addToCart": "Add to Cart",
    "product.buyNow": "Buy Now",
    "product.outOfStock": "Out of Stock",
    "product.inStock": "In Stock",
    "product.reviews": "Reviews",
    "product.rating": "Rating",
    "product.price": "Price",
    "product.originalPrice": "Original Price",

    // Cart
    "cart.empty": "Your cart is empty",
    "cart.total": "Total",
    "cart.subtotal": "Subtotal",
    "cart.checkout": "Checkout",
    "cart.quantity": "Quantity",

    // Categories
    "category.body": "Tivara Body",
    "category.mind": "Tivara Mind",
    "category.space": "Tivara Space",

    // Quiz
    "quiz.title": "Wellness Quiz",
    "quiz.subtitle": "Discover Your Dosha",
    "quiz.start": "Start Quiz",
    "quiz.next": "Next",
    "quiz.previous": "Previous",
    "quiz.submit": "Submit",
    "quiz.results": "Your Results",

    // Footer
    "footer.about": "About Tivara Living",
    "footer.contact": "Contact Us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.newsletter": "Newsletter",
    "footer.social": "Follow Us",
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.shop": "खरीदारी",
    "nav.about": "हमारे बारे में",
    "nav.blog": "ब्लॉग",
    "nav.contact": "संपर्क",
    "nav.cart": "कार्ट",
    "nav.wishlist": "इच्छा सूची",
    "nav.account": "खाता",

    // Common
    "common.loading": "लोड हो रहा है...",
    "common.error": "त्रुटि",
    "common.success": "सफलता",
    "common.cancel": "रद्द करें",
    "common.save": "सेव करें",
    "common.delete": "हटाएं",
    "common.edit": "संपादित करें",
    "common.view": "देखें",
    "common.add": "जोड़ें",
    "common.remove": "हटाएं",

    // Product
    "product.addToCart": "कार्ट में जोड़ें",
    "product.buyNow": "अभी खरीदें",
    "product.outOfStock": "स्टॉक में नहीं",
    "product.inStock": "स्टॉक में",
    "product.reviews": "समीक्षाएं",
    "product.rating": "रेटिंग",
    "product.price": "कीमत",
    "product.originalPrice": "मूल कीमत",

    // Cart
    "cart.empty": "आपका कार्ट खाली है",
    "cart.total": "कुल",
    "cart.subtotal": "उप-योग",
    "cart.checkout": "चेकआउट",
    "cart.quantity": "मात्रा",

    // Categories
    "category.body": "तिवारा शरीर",
    "category.mind": "तिवारा मन",
    "category.space": "तिवारा स्थान",

    // Quiz
    "quiz.title": "कल्याण प्रश्नोत्तरी",
    "quiz.subtitle": "अपना दोष जानें",
    "quiz.start": "प्रश्नोत्तरी शुरू करें",
    "quiz.next": "अगला",
    "quiz.previous": "पिछला",
    "quiz.submit": "जमा करें",
    "quiz.results": "आपके परिणाम",

    // Footer
    "footer.about": "तिवारा लिविंग के बारे में",
    "footer.contact": "हमसे संपर्क करें",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "सेवा की शर्तें",
    "footer.newsletter": "न्यूज़लेटर",
    "footer.social": "हमें फॉलो करें",
  },
  ta: {
    // Navigation
    "nav.home": "முகப்பு",
    "nav.shop": "கடை",
    "nav.about": "எங்களைப் பற்றி",
    "nav.blog": "வலைப்பதிவு",
    "nav.contact": "தொடர்பு",
    "nav.cart": "வண்டி",
    "nav.wishlist": "விருப்பப் பட்டியல்",
    "nav.account": "கணக்கு",

    // Common
    "common.loading": "ஏற்றுகிறது...",
    "common.error": "பிழை",
    "common.success": "வெற்றி",
    "common.cancel": "ரத்து செய்",
    "common.save": "சேமி",
    "common.delete": "நீக்கு",
    "common.edit": "திருத்து",
    "common.view": "பார்",
    "common.add": "சேர்",
    "common.remove": "நீக்கு",

    // Product
    "product.addToCart": "வண்டியில் சேர்",
    "product.buyNow": "இப்போது வாங்கு",
    "product.outOfStock": "கையிருப்பில் இல்லை",
    "product.inStock": "கையிருப்பில் உள்ளது",
    "product.reviews": "மதிப்புரைகள்",
    "product.rating": "மதிப்பீடு",
    "product.price": "விலை",
    "product.originalPrice": "அசல் விலை",

    // Categories
    "category.body": "திவாரா உடல்",
    "category.mind": "திவாரா மனம்",
    "category.space": "திவாரா இடம்",
  },
  te: {
    // Navigation
    "nav.home": "హోమ్",
    "nav.shop": "షాప్",
    "nav.about": "మా గురించి",
    "nav.blog": "బ్లాగ్",
    "nav.contact": "సంప్రదించండి",
    "nav.cart": "కార్ట్",
    "nav.wishlist": "కోరిక జాబితా",
    "nav.account": "ఖాతా",

    // Common
    "common.loading": "లోడ్ అవుతోంది...",
    "common.error": "లోపం",
    "common.success": "విజయం",
    "common.cancel": "రద్దు చేయండి",
    "common.save": "సేవ్ చేయండి",
    "common.delete": "తొలగించండి",
    "common.edit": "సవరించండి",
    "common.view": "చూడండి",
    "common.add": "జోడించండి",
    "common.remove": "తొలగించండి",

    // Categories
    "category.body": "తివారా శరీరం",
    "category.mind": "తివారా మనసు",
    "category.space": "తివారా స్థలం",
  },
  bn: {
    // Navigation
    "nav.home": "হোম",
    "nav.shop": "দোকান",
    "nav.about": "আমাদের সম্পর্কে",
    "nav.blog": "ব্লগ",
    "nav.contact": "যোগাযোগ",
    "nav.cart": "কার্ট",
    "nav.wishlist": "ইচ্ছা তালিকা",
    "nav.account": "অ্যাকাউন্ট",

    // Common
    "common.loading": "লোড হচ্ছে...",
    "common.error": "ত্রুটি",
    "common.success": "সফলতা",
    "common.cancel": "বাতিল",
    "common.save": "সংরক্ষণ",
    "common.delete": "মুছুন",
    "common.edit": "সম্পাদনা",
    "common.view": "দেখুন",
    "common.add": "যোগ করুন",
    "common.remove": "সরান",

    // Categories
    "category.body": "তিবারা শরীর",
    "category.mind": "তিবারা মন",
    "category.space": "তিবারা স্থান",
  },
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("tivara-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("tivara-language", lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
