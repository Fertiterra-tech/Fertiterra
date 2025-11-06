"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart, Share2, BookOpen, Clock, User } from "lucide-react"
import { Header } from "@/components/header"

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  readTime: string
  publishedAt: string
  category: string
  tags: string[]
  likes: number
  videoUrl?: string
}

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/knowledge-centre?slug=${params.slug}`)
        if (response.ok) {
          const data = await response.json()
          setArticle(data)
        }
      } catch (error) {
        console.error("Error fetching article:", error)
      } finally {
        setLoading(false)
      }
    }

    if (params.slug) {
      fetchArticle()
    }
  }, [params.slug])

  const handleLike = () => {
    setLiked(!liked)
    if (article) {
      setArticle({
        ...article,
        likes: liked ? article.likes - 1 : article.likes + 1,
      })
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-8"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/knowledge-centre">
              <Button>Back to Knowledge Centre</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-rose-50 to-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/knowledge-centre" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Knowledge Centre
            </Link>

            <div className="mb-6">
              <span className="inline-block bg-rose-100 text-rose-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{article.publishedAt}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className="flex items-center gap-2"
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                <span>{article.likes}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2 bg-transparent"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Video Section */}
                {article.videoUrl && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Watch: Understanding Infertility in Africa
                    </h3>
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ZBRYe9_0X0w?si=fOKeTvNbgG6CfYTI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                )}

                {/* Article Text Content */}
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Understanding Fertility Testing in Africa
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Learn about the importance of early fertility testing and available options across African
                    healthcare systems.
                  </p>
                  <Link
                    href="/knowledge-centre/fertility-testing-africa"
                    className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Breaking Cultural Barriers in Reproductive Health
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Exploring how cultural sensitivity can improve reproductive healthcare outcomes in diverse African
                    communities.
                  </p>
                  <Link
                    href="/knowledge-centre/cultural-barriers-reproductive-health"
                    className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
