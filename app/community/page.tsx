"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { useAuth } from "@/context/auth-context"
import { Heart, MessageCircle, Users, Calendar, Plus, TrendingUp } from "lucide-react"

const communityPosts = [
  {
    id: "1",
    title: "Just got my AMH results - feeling hopeful!",
    author: "Sarah M.",
    avatar: "/placeholder.svg?height=40&width=40&text=SM",
    content:
      "After months of trying, I finally got my hormone tests done. My AMH levels are good and I'm feeling optimistic about our journey ahead.",
    category: "Success Stories",
    likes: 24,
    comments: 8,
    timeAgo: "2 hours ago",
    trending: true,
  },
  {
    id: "2",
    title: "PCOS diagnosis - looking for support and advice",
    author: "Emma K.",
    avatar: "/placeholder.svg?height=40&width=40&text=EK",
    content:
      "Just received my PCOS diagnosis. Feeling overwhelmed but ready to take control. Would love to connect with others who've been through this.",
    category: "Support",
    likes: 18,
    comments: 12,
    timeAgo: "4 hours ago",
  },
  {
    id: "3",
    title: "Fertility-friendly recipes that actually taste good!",
    author: "Lisa R.",
    avatar: "/placeholder.svg?height=40&width=40&text=LR",
    content:
      "Sharing some delicious recipes that have helped me on my fertility journey. Who says healthy eating has to be boring?",
    category: "Nutrition",
    likes: 31,
    comments: 15,
    timeAgo: "6 hours ago",
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "PCOS Support Group Meeting",
    date: "2024-01-20",
    time: "7:00 PM EST",
    type: "Virtual",
    attendees: 24,
  },
  {
    id: "2",
    title: "Fertility Nutrition Workshop",
    date: "2024-01-22",
    time: "6:30 PM EST",
    type: "Virtual",
    attendees: 18,
  },
  {
    id: "3",
    title: "Mindfulness for Fertility",
    date: "2024-01-25",
    time: "8:00 PM EST",
    type: "Virtual",
    attendees: 32,
  },
]

export default function CommunityPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("posts")

  const handleLike = (postId: string) => {
    // In a real app, this would update the like count in the database
    console.log(`Liked post ${postId}`)
  }

  const handleJoinEvent = (eventId: string) => {
    if (!user) {
      // Redirect to login
      window.location.href = "/login?redirect=/community"
      return
    }
    // In a real app, this would register the user for the event
    console.log(`Joined event ${eventId}`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-rose-50 to-purple-50 py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">FertiTerra Community</h1>
              <p className="text-lg text-gray-600 mb-6">
                Connect with others on similar journeys, share experiences, and find support in our caring community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-500" />
                  <span>15,000+ members</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-rose-500" />
                  <span>Safe & supportive space</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-500" />
                  <span>Expert-moderated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="posts">Community Posts</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="groups">Support Groups</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Recent Posts</h2>
                  {user ? (
                    <Button className="bg-rose-500 hover:bg-rose-600">
                      <Plus className="mr-2 h-4 w-4" />
                      New Post
                    </Button>
                  ) : (
                    <Link href="/login?redirect=/community">
                      <Button className="bg-rose-500 hover:bg-rose-600">Join Community</Button>
                    </Link>
                  )}
                </div>

                <div className="space-y-4">
                  {communityPosts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Image
                              src={post.avatar || "/placeholder.svg"}
                              alt={post.author}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{post.author}</p>
                                {post.trending && (
                                  <Badge variant="outline" className="bg-orange-50 text-orange-700">
                                    <TrendingUp className="mr-1 h-3 w-3" />
                                    Trending
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-500">{post.timeAgo}</p>
                            </div>
                          </div>
                          <Badge variant="outline">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{post.content}</p>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className="text-gray-500 hover:text-rose-500"
                          >
                            <Heart className="mr-2 h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-rose-500">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            {post.comments}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Calendar
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm">
                                {event.time} • {event.type}
                              </span>
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => handleJoinEvent(event.id)}
                            className="bg-rose-500 hover:bg-rose-600"
                          >
                            Join Event
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="groups" className="space-y-6">
                <h2 className="text-2xl font-bold">Support Groups</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "PCOS Warriors", members: 1247, description: "Support for women with PCOS" },
                    { name: "TTC Community", members: 892, description: "Trying to conceive support group" },
                    { name: "Fertility After 35", members: 634, description: "Support for women over 35" },
                    { name: "Hormone Balance", members: 456, description: "Natural hormone balancing tips" },
                    { name: "IVF Journey", members: 789, description: "Support through IVF treatment" },
                    { name: "Pregnancy Loss Support", members: 234, description: "Healing after pregnancy loss" },
                  ].map((group, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <CardDescription>{group.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users className="h-4 w-4" />
                            <span>{group.members} members</span>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              if (!user) {
                                window.location.href = "/login?redirect=/community"
                                return
                              }
                              console.log(`Joined group ${group.name}`)
                            }}
                          >
                            Join Group
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
