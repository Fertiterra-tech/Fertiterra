"use client"

import Link from "next/link"
import { ArrowLeft, Play, Clock } from "lucide-react"

export default function EducationPage() {
  const categories = [
    { name: "Understanding Your Cycle", count: 12, color: "bg-pink-100 text-pink-600" },
    { name: "Fertility Basics", count: 18, color: "bg-purple-100 text-purple-600" },
    { name: "Hormones & Health", count: 15, color: "bg-blue-100 text-blue-600" },
    { name: "Trying to Conceive", count: 20, color: "bg-green-100 text-green-600" },
  ]

  const articles = [
    {
      id: 1,
      title: "Understanding Ovulation Signs",
      description: "Learn to identify your body's fertile signals and optimize conception timing",
      duration: "5 min read",
      category: "Fertility Basics",
      image: "🥚",
    },
    {
      id: 2,
      title: "Basal Body Temperature Tracking",
      description: "A comprehensive guide to BBT charting for fertility awareness",
      duration: "8 min read",
      category: "Understanding Your Cycle",
      image: "🌡️",
    },
    {
      id: 3,
      title: "Hormone Balance and Fertility",
      description: "How your hormones affect fertility and what you can do about it",
      duration: "10 min read",
      category: "Hormones & Health",
      image: "⚖️",
    },
    {
      id: 4,
      title: "Lifestyle Factors for Fertility",
      description: "Diet, exercise, and lifestyle changes that can improve your fertility",
      duration: "7 min read",
      category: "Trying to Conceive",
      image: "🌿",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Health Education</h1>
            <p className="text-sm text-gray-600">Expert articles and guides</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className="bg-white rounded-2xl p-4 text-left hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                  {category.count} articles
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Video */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-6 h-6" />
            <span className="text-sm font-medium">Featured Video</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Introduction to Fertility Awareness</h2>
          <p className="text-purple-100 mb-4">A 15-minute video guide to understanding your fertility</p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
            Watch Now
          </button>
        </div>

        {/* Articles */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recommended for You</h2>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{article.image}</div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-2">
                      {article.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{article.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
