import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CommunityFeed() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40&text=PS",
        title: "Ayurvedic Practitioner",
      },
      timestamp: "2 hours ago",
      content:
        "Just completed a 21-day Panchakarma cleanse and feeling absolutely transformed! The mental clarity and energy levels are incredible. For anyone considering it, I highly recommend working with a qualified practitioner. Happy to share my experience and answer questions! 🌿✨",
      image: "/placeholder.svg?height=300&width=500&text=Panchakarma+Journey",
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ["#Panchakarma", "#Detox", "#Transformation"],
    },
    {
      id: 2,
      author: {
        name: "Rajesh Kumar",
        avatar: "/placeholder.svg?height=40&width=40&text=RK",
        title: "Vastu Consultant",
      },
      timestamp: "5 hours ago",
      content:
        "Quick Vastu tip for better sleep: Keep your bedroom in the southwest direction of your home if possible. Remove all electronics at least 1 hour before bed, and place a small bowl of water with rose petals near your bedside. Sweet dreams! 🌙",
      likes: 18,
      comments: 12,
      shares: 6,
      tags: ["#Vastu", "#Sleep", "#Wellness"],
    },
    {
      id: 3,
      author: {
        name: "Maya Patel",
        avatar: "/placeholder.svg?height=40&width=40&text=MP",
        title: "Meditation Teacher",
      },
      timestamp: "1 day ago",
      content:
        "Today's meditation insight: 'The mind is like water - when agitated, it becomes difficult to see. When calm, everything becomes clear.' Remember to give yourself permission to pause, breathe, and find your center throughout the day. 🧘‍♀️",
      likes: 42,
      comments: 15,
      shares: 9,
      tags: ["#Meditation", "#Mindfulness", "#InnerPeace"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-playfair text-2xl font-bold text-stone-800">Community Feed</h2>
        <Button className="btn-primary">Share Your Story</Button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="card-spiritual">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-stone-800">{post.author.name}</h3>
                  <p className="text-sm text-stone-500">
                    {post.author.title} • {post.timestamp}
                  </p>
                </div>
              </div>
              <button className="text-stone-400 hover:text-stone-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Content */}
            <div className="mb-4">
              <p className="text-stone-700 leading-relaxed mb-3">{post.content}</p>
              {post.image && (
                <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full rounded-xl mb-3" />
              )}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="text-emerald-600 text-sm hover:underline cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-stone-500 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-stone-500 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-stone-500 hover:text-emerald-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="px-8 bg-transparent">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
