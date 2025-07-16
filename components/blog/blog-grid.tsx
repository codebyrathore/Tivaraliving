import Link from "next/link"
import { Calendar, User } from "lucide-react"

export function BlogGrid() {
  const articles = [
    {
      id: 1,
      title: "The Science Behind Turmeric: Ancient Wisdom Meets Modern Research",
      excerpt:
        "Discover how modern science validates the traditional use of turmeric in Ayurvedic medicine for inflammation and cognitive health.",
      category: "Healing",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400&text=Turmeric+Science",
      tags: ["Ayurveda", "Science", "Turmeric", "Inflammation"],
      featured: true,
    },
    {
      id: 2,
      title: "Creating Sacred Space: Vastu Principles for Modern Homes",
      excerpt:
        "Learn how to apply ancient Vastu Shastra principles to create harmony and positive energy flow in your contemporary living space.",
      category: "Vastu",
      author: "Rajesh Kumar",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400&text=Vastu+Home",
      tags: ["Vastu", "Home", "Energy", "Space"],
    },
    {
      id: 3,
      title: "Morning Rituals: Ayurvedic Practices for Daily Wellness",
      excerpt:
        "Establish a powerful morning routine based on Ayurvedic principles to enhance your energy, clarity, and overall well-being.",
      category: "Rituals",
      author: "Maya Patel",
      date: "2024-01-10",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400&text=Morning+Rituals",
      tags: ["Rituals", "Morning", "Wellness", "Routine"],
    },
    {
      id: 4,
      title: "Understanding Your Dosha: A Complete Guide to Ayurvedic Body Types",
      excerpt:
        "Discover your unique constitution and learn how to balance your doshas for optimal health and vitality.",
      category: "Ayurveda",
      author: "Dr. Anand Krishnan",
      date: "2024-01-08",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=400&text=Dosha+Guide",
      tags: ["Dosha", "Constitution", "Ayurveda", "Health"],
    },
    {
      id: 5,
      title: "Planetary Influences on Health: Grah and Wellness",
      excerpt:
        "Explore how planetary positions and cosmic energies influence our physical and mental well-being according to Vedic wisdom.",
      category: "Grah",
      author: "Pandit Suresh Joshi",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=400&text=Planetary+Health",
      tags: ["Grah", "Astrology", "Health", "Cosmic"],
    },
    {
      id: 6,
      title: "Meditation for Beginners: Starting Your Mindfulness Journey",
      excerpt:
        "A practical guide to beginning meditation practice with simple techniques rooted in ancient wisdom traditions.",
      category: "Rituals",
      author: "Lila Devi",
      date: "2024-01-03",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400&text=Meditation+Guide",
      tags: ["Meditation", "Mindfulness", "Beginner", "Practice"],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      {articles
        .filter((article) => article.featured)
        .map((article) => (
          <article key={article.id} className="card-spiritual overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-64 md:h-full object-cover rounded-xl"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <span className="text-emerald-600 font-medium text-sm">{article.category}</span>
                  <h2 className="font-playfair text-2xl font-bold text-stone-800 mt-2 mb-3">
                    <Link href={`/blog/${article.id}`} className="hover:text-emerald-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="flex items-center space-x-4 text-sm text-stone-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-stone-100 text-stone-600 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

      {/* Regular Articles */}
      <div className="grid md:grid-cols-2 gap-6">
        {articles
          .filter((article) => !article.featured)
          .map((article) => (
            <article key={article.id} className="card-spiritual hover:scale-105 transition-all duration-300">
              <div className="relative mb-4">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-stone-800">
                  <Link href={`/blog/${article.id}`} className="hover:text-emerald-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">{article.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center space-x-2">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-stone-100 text-stone-600 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  )
}
