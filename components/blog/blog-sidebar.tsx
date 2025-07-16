import Link from "next/link"
import { Search, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function BlogSidebar() {
  const categories = [
    { name: "Healing", count: 24 },
    { name: "Ayurveda", count: 18 },
    { name: "Vastu", count: 12 },
    { name: "Grah", count: 8 },
    { name: "Rituals", count: 15 },
    { name: "Wellness", count: 32 },
  ]

  const popularPosts = [
    {
      id: 1,
      title: "5 Morning Rituals for Better Energy",
      date: "2024-01-10",
      views: 2840,
    },
    {
      id: 2,
      title: "Understanding Vata Dosha",
      date: "2024-01-08",
      views: 2156,
    },
    {
      id: 3,
      title: "Crystal Healing for Beginners",
      date: "2024-01-05",
      views: 1923,
    },
    {
      id: 4,
      title: "Vastu Tips for Home Office",
      date: "2024-01-03",
      views: 1687,
    },
  ]

  const tags = [
    "Ayurveda",
    "Meditation",
    "Wellness",
    "Healing",
    "Vastu",
    "Dosha",
    "Rituals",
    "Energy",
    "Mindfulness",
    "Herbs",
    "Yoga",
    "Spirituality",
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">Search Articles</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
          <Input type="search" placeholder="Search wellness topics..." className="pl-10" />
        </div>
      </div>

      {/* Categories */}
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog/category/${category.name.toLowerCase()}`}
              className="flex items-center justify-between text-stone-700 hover:text-emerald-600 transition-colors"
            >
              <span>{category.name}</span>
              <span className="text-sm text-stone-500">({category.count})</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </span>
              <div className="flex-1">
                <Link
                  href={`/blog/${post.id}`}
                  className="font-medium text-stone-800 hover:text-emerald-600 transition-colors text-sm leading-tight"
                >
                  {post.title}
                </Link>
                <div className="flex items-center space-x-2 mt-1 text-xs text-stone-500">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="card-spiritual bg-gradient-to-br from-emerald-50 to-amber-50">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-3">Stay Updated</h3>
        <p className="text-stone-600 text-sm mb-4">
          Get weekly wellness insights and exclusive content delivered to your inbox.
        </p>
        <div className="space-y-3">
          <Input type="email" placeholder="Your email address" />
          <Button className="btn-primary w-full">Subscribe</Button>
        </div>
      </div>

      {/* Tags */}
      <div className="card-spiritual">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="bg-stone-100 hover:bg-emerald-100 text-stone-600 hover:text-emerald-700 px-3 py-1 rounded-full text-sm transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
