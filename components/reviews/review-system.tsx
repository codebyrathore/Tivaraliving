"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, Flag, User, CheckCircle } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"

interface Review {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  content: string
  createdAt: Date
  verified: boolean
  helpful: number
  reported: boolean
  images?: string[]
}

interface ReviewSystemProps {
  productId: string
  productName: string
  averageRating: number
  totalReviews: number
}

export function ReviewSystem({ productId, productName, averageRating, totalReviews }: ReviewSystemProps) {
  const { user } = useAuth()
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      userId: "user1",
      userName: "Priya Sharma",
      rating: 5,
      title: "Excellent product for daily wellness",
      content:
        "I've been using this for 3 months now and the results are amazing. My sleep quality has improved significantly and I feel more energetic throughout the day. The taste is also very pleasant, not too strong or bitter.",
      createdAt: new Date("2024-01-15"),
      verified: true,
      helpful: 24,
      reported: false,
    },
    {
      id: "2",
      userId: "user2",
      userName: "Rajesh Kumar",
      rating: 4,
      title: "Good quality, fast delivery",
      content:
        "The product quality is excellent and packaging was very secure. Delivery was faster than expected. I've noticed some improvement in my joint pain after 2 weeks of use. Will definitely order again.",
      createdAt: new Date("2024-01-10"),
      verified: true,
      helpful: 18,
      reported: false,
    },
  ])

  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: "",
    content: "",
  })
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "rating" | "helpful">("newest")

  const submitReview = () => {
    if (!user || newReview.rating === 0 || !newReview.title || !newReview.content) {
      return
    }

    const review: Review = {
      id: Date.now().toString(),
      userId: user.id,
      userName: user.name,
      rating: newReview.rating,
      title: newReview.title,
      content: newReview.content,
      createdAt: new Date(),
      verified: true, // In real app, check if user purchased the product
      helpful: 0,
      reported: false,
    }

    setReviews((prev) => [review, ...prev])
    setNewReview({ rating: 0, title: "", content: "" })
    setShowReviewForm(false)
  }

  const markHelpful = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((review) => (review.id === reviewId ? { ...review, helpful: review.helpful + 1 } : review)),
    )
  }

  const reportReview = (reviewId: string) => {
    setReviews((prev) => prev.map((review) => (review.id === reviewId ? { ...review, reported: true } : review)))
  }

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.createdAt.getTime() - a.createdAt.getTime()
      case "oldest":
        return a.createdAt.getTime() - b.createdAt.getTime()
      case "rating":
        return b.rating - a.rating
      case "helpful":
        return b.helpful - a.helpful
      default:
        return 0
    }
  })

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
    percentage: (reviews.filter((r) => r.rating === rating).length / reviews.length) * 100,
  }))

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-stone-800 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-stone-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-stone-600">Based on {totalReviews} reviews</p>
            </div>

            <div className="space-y-2">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center space-x-3">
                  <span className="text-sm w-8">{rating}★</span>
                  <div className="flex-1 bg-stone-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="text-sm text-stone-600 w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            {user ? (
              <Button onClick={() => setShowReviewForm(true)} className="btn-primary">
                Write a Review
              </Button>
            ) : (
              <p className="text-stone-600">
                <a href="/signin" className="text-emerald-600 hover:underline">
                  Sign in
                </a>{" "}
                to write a review
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Review Form */}
      {showReviewForm && (
        <Card>
          <CardHeader>
            <CardTitle>Write Your Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button key={rating} onClick={() => setNewReview((prev) => ({ ...prev, rating }))} className="p-1">
                    <Star
                      className={`w-6 h-6 ${
                        rating <= newReview.rating ? "text-yellow-400 fill-current" : "text-stone-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Review Title</label>
              <Input
                value={newReview.title}
                onChange={(e) => setNewReview((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Summarize your experience"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea
                value={newReview.content}
                onChange={(e) => setNewReview((prev) => ({ ...prev, content: e.target.value }))}
                placeholder="Share your experience with this product..."
                rows={4}
              />
            </div>

            <div className="flex space-x-3">
              <Button onClick={submitReview} className="btn-primary">
                Submit Review
              </Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)} className="bg-transparent">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Reviews ({reviews.length})</CardTitle>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border border-stone-300 rounded px-3 py-1 text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="rating">Highest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {sortedReviews.map((review) => (
              <div key={review.id} className="border-b border-stone-200 pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-stone-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.userName}</span>
                        {review.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-stone-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-stone-500">{review.createdAt.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-stone-800 mb-2">{review.title}</h4>
                <p className="text-stone-700 leading-relaxed mb-4">{review.content}</p>

                <div className="flex items-center space-x-4 text-sm">
                  <button
                    onClick={() => markHelpful(review.id)}
                    className="flex items-center space-x-1 text-stone-600 hover:text-emerald-600"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful ({review.helpful})</span>
                  </button>

                  <button
                    onClick={() => reportReview(review.id)}
                    className="flex items-center space-x-1 text-stone-600 hover:text-red-600"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Report</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
