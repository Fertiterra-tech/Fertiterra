"use client"

import Link from "next/link"
import { ArrowLeft, Users, MessageCircle, Heart, Send } from "lucide-react"
import { useState } from "react"

export default function CommunityPage() {
  const [newPost, setNewPost] = useState("")

  const posts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "S",
      time: "2 hours ago",
      content: "Just got my first positive ovulation test! Feeling hopeful this cycle 🤞",
      likes: 24,
      comments: 8,
      category: "TTC Journey",
    },
    {
      id: 2,
      author: "Jennifer K.",
      avatar: "J",
      time: "5 hours ago",
      content: "Anyone else tracking BBT? What's your preferred thermometer? Looking for recommendations.",
      likes: 12,
      comments: 15,
      category: "Tracking Tips",
    },
    {
      id: 3,
      author: "Emily R.",
      avatar: "E",
      time: "1 day ago",
      content: "Reminder: Be kind to yourself. This journey is different for everyone. You're doing amazing! 💕",
      likes: 89,
      comments: 23,
      category: "Support",
    },
  ]

  const handlePost = () => {
    console.log("[v0] New post:", newPost)
    setNewPost("")
    alert("Post shared with the community!")
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Community</h1>
            <p className="text-sm text-gray-600">Connect with others</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Community Stats */}
        <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl p-6 mb-6 text-white">
          <Users className="w-10 h-10 mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">10,000+ Women</h2>
          <p className="text-pink-100">Supporting each other on their fertility journeys</p>
        </div>

        {/* Create Post */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Share with the Community</h2>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your experience, ask a question, or offer support..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none mb-4"
          />
          <button
            onClick={handlePost}
            disabled={!newPost.trim()}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Share Post
          </button>
        </div>

        {/* Community Feed */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Community Feed</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{post.author}</span>
                      <span className="text-xs text-gray-500">{post.time}</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
