"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, Eye, Heart, Share2, Filter } from "lucide-react"
import { Header } from "@/components/header"

interface Article {
  id: number
  title: string
  slug: string
  author: string
  category: string
  tags: string[]
  date: string
  featuredImage: string
  summary: string
  readTime: number
  views: number
  likes: number
  shares: number
}

const categories = [
  "All",
  "Awareness & Education",
  "Fertility Testing",
  "Treatment Options",
  "Lifestyle & Wellness",
  "Success Stories",
  "Research & Science",
]

export default function KnowledgeCentre() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    fetchArticles()
  }, [selectedCategory, searchTerm])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (selectedCategory !== "All") params.append("category", selectedCategory)
      if (searchTerm) params.append("search", searchTerm)

      const response = await fetch(`/api/knowledge-centre?${params}`)
      const data = await response.json()

      if (data.success) {
        setArticles(data.articles)
      }
    } catch (error) {
      console.error("Error fetching articles:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchArticles()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Knowledge Centre</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, research-backed articles, and educational resources to support your fertility journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" className="bg-rose-500 hover:bg-rose-600">
              Search
            </Button>
            <Button type="button" variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </form>

          {/* Category Filters */}
          <div className={`${showFilters ? "block" : "hidden md:block"}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-rose-500 hover:bg-rose-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse different categories</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={article.featuredImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/fertility-education.png"
                    }}
                  />
                  <Badge className="absolute top-3 left-3 bg-rose-500">{article.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="line-clamp-2 hover:text-rose-500 transition-colors">
                    <Link href={`/knowledge-centre/${article.slug}`}>{article.title}</Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>{article.author}</span>
                    <span>{formatDate(article.date)}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">{article.summary}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime} min read
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="flex items-center hover:text-rose-500 transition-colors">
                        <Heart className="h-4 w-4 mr-1" />
                        {article.likes}
                      </button>
                      <button className="flex items-center hover:text-rose-500 transition-colors">
                        <Share2 className="h-4 w-4 mr-1" />
                        {article.shares}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Featured Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
              <CardHeader>
                <CardTitle className="text-rose-700">Fertility Testing Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete guide to understanding fertility tests and what they mean for your journey.
                </p>
                <Link href="/test-kits">
                  <Button className="bg-rose-500 hover:bg-rose-600">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Expert Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with fertility specialists and get personalized advice for your situation.
                </p>
                <Link href="/appointments">
                  <Button className="bg-green-500 hover:bg-green-600">Book Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our supportive community and connect with others on similar journeys.
                </p>
                <Link href="/community">
                  <Button className="bg-blue-500 hover:bg-blue-600">Join Community</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
