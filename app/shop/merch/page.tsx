"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Cart } from "@/components/cart"
import { useCart } from "@/context/cart-context"
import { Star, ShoppingCart, ArrowRight, Filter, Heart, Zap, Sparkles, Users, Globe } from "lucide-react"

// Product collections data
const collections = [
  {
    id: "seeds-of-hope",
    name: "Seeds of Hope",
    description: "Nurturing dreams and planting hope for every fertility journey",
    color: "from-green-400 to-emerald-600",
  },
  {
    id: "fertithreads",
    name: "FertiThreads",
    description: "Weaving stories of strength, resilience, and empowerment",
    color: "from-purple-400 to-indigo-600",
  },
  {
    id: "bloom-collection",
    name: "Bloom Collection",
    description: "Celebrating growth, transformation, and new beginnings",
    color: "from-pink-400 to-rose-600",
  },
  {
    id: "conceive-celebrate",
    name: "Conceive & Celebrate",
    description: "Honoring every step of the conception journey",
    color: "from-yellow-400 to-orange-600",
  },
  {
    id: "terrawear",
    name: "TerraWear",
    description: "Earth-conscious fashion for fertility awareness",
    color: "from-teal-400 to-cyan-600",
  },
]

const products = [
  // Seeds of Hope Collection
  {
    id: "seeds-hope-tshirt",
    name: "Seeds of Hope T-Shirt",
    collection: "seeds-of-hope",
    category: "t-shirt",
    price: 25,
    originalPrice: 25,
    rating: 4.9,
    reviews: 234,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2047.JPG-40GcqfKlneX3w3IJFRc7Q1rfvQ7EVm.jpeg",
    description: "Comfortable cotton t-shirt spreading hope and fertility awareness",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    featured: true,
  },
  {
    id: "seeds-hope-tote",
    name: "Seeds of Hope Tote Bag",
    collection: "seeds-of-hope",
    category: "tote",
    price: 15,
    originalPrice: 15,
    rating: 4.8,
    reviews: 156,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2057.JPG-KX9RUdE0a0xFlUAKAyIyQEcoVVgrLD.jpeg",
    description: "Eco-friendly tote bag with inspiring fertility message",
    sizes: ["One Size"],
    colors: ["White", "Natural", "Black"],
    featured: true,
  },
  {
    id: "seeds-hope-hat",
    name: "Seeds of Hope Cap",
    collection: "seeds-of-hope",
    category: "hat",
    price: 15,
    originalPrice: 15,
    rating: 4.7,
    reviews: 89,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2061.JPG-Z9NdfWAH3IoMzxTGWwdcMTdDmfFl0t.jpeg",
    description: "Adjustable cap with embroidered fertility awareness message",
    sizes: ["One Size"],
    colors: ["White", "Black", "Navy"],
    featured: true,
  },

  // FertiThreads Collection
  {
    id: "fertithreads-tshirt",
    name: "FertiThreads Classic Tee",
    collection: "fertithreads",
    category: "t-shirt",
    price: 25,
    originalPrice: 25,
    rating: 4.8,
    reviews: 198,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2053.JPG-C2CYqTkEafnrJw9CI8Cq7R2idRoLT5.jpeg",
    description: "Premium cotton tee with bold fertility empowerment design",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Purple"],
    featured: false,
  },
  {
    id: "fertithreads-tote",
    name: "FertiThreads Tote",
    collection: "fertithreads",
    category: "tote",
    price: 15,
    originalPrice: 15,
    rating: 4.6,
    reviews: 112,
    image: "/placeholder-efz0c.png",
    description: "Stylish tote bag for the modern fertility advocate",
    sizes: ["One Size"],
    colors: ["Purple", "White", "Black"],
    featured: false,
  },
  {
    id: "fertithreads-hat",
    name: "FertiThreads Snapback",
    collection: "fertithreads",
    category: "hat",
    price: 15,
    originalPrice: 15,
    rating: 4.5,
    reviews: 67,
    image: "/placeholder-6fvhy.png",
    description: "Trendy snapback with embroidered FertiThreads branding",
    sizes: ["One Size"],
    colors: ["Purple", "Black", "White"],
    featured: false,
  },

  // Bloom Collection
  {
    id: "bloom-tshirt",
    name: "Bloom Collection Tee",
    collection: "bloom-collection",
    category: "t-shirt",
    price: 25,
    originalPrice: 25,
    rating: 4.9,
    reviews: 267,
    image: "/placeholder-urord.png",
    description: "Soft cotton tee celebrating growth and new beginnings",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "White", "Sage Green"],
    featured: false,
  },
  {
    id: "bloom-tote",
    name: "Bloom Tote Bag",
    collection: "bloom-collection",
    category: "tote",
    price: 15,
    originalPrice: 15,
    rating: 4.7,
    reviews: 143,
    image: "/placeholder-ki229.png",
    description: "Beautiful tote with botanical fertility-inspired design",
    sizes: ["One Size"],
    colors: ["Pink", "Sage Green", "White"],
    featured: false,
  },
  {
    id: "bloom-hat",
    name: "Bloom Baseball Cap",
    collection: "bloom-collection",
    category: "hat",
    price: 15,
    originalPrice: 15,
    rating: 4.6,
    reviews: 78,
    image: "/placeholder-q0bt2.png",
    description: "Comfortable cap with delicate floral embroidery",
    sizes: ["One Size"],
    colors: ["Pink", "White", "Sage Green"],
    featured: false,
  },

  // Conceive & Celebrate Collection
  {
    id: "conceive-celebrate-tshirt",
    name: "Conceive & Celebrate Tee",
    collection: "conceive-celebrate",
    category: "t-shirt",
    price: 25,
    originalPrice: 25,
    rating: 4.8,
    reviews: 189,
    image: "/placeholder-ue9vy.png",
    description: "Celebratory tee honoring every fertility milestone",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "White", "Coral"],
    featured: false,
  },
  {
    id: "conceive-celebrate-tote",
    name: "Conceive & Celebrate Tote",
    collection: "conceive-celebrate",
    category: "tote",
    price: 15,
    originalPrice: 15,
    rating: 4.5,
    reviews: 98,
    image: "/placeholder-rmbf2.png",
    description: "Joyful tote bag celebrating fertility journey victories",
    sizes: ["One Size"],
    colors: ["Yellow", "Coral", "White"],
    featured: false,
  },
  {
    id: "conceive-celebrate-hat",
    name: "Conceive & Celebrate Cap",
    collection: "conceive-celebrate",
    category: "hat",
    price: 15,
    originalPrice: 15,
    rating: 4.4,
    reviews: 56,
    image: "/placeholder-ypfyt.png",
    description: "Uplifting cap with positive fertility affirmations",
    sizes: ["One Size"],
    colors: ["Yellow", "White", "Coral"],
    featured: false,
  },

  // TerraWear Collection
  {
    id: "terrawear-tshirt",
    name: "TerraWear Eco Tee",
    collection: "terrawear",
    category: "t-shirt",
    price: 25,
    originalPrice: 25,
    rating: 4.7,
    reviews: 145,
    image: "/placeholder-reuty.png",
    description: "Sustainable cotton tee for eco-conscious fertility advocates",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Teal", "Forest Green", "White"],
    featured: false,
  },
  {
    id: "terrawear-tote",
    name: "TerraWear Eco Tote",
    collection: "terrawear",
    category: "tote",
    price: 15,
    originalPrice: 15,
    rating: 4.6,
    reviews: 87,
    image: "/placeholder-ibexx.png",
    description: "Recycled material tote bag with earth-conscious messaging",
    sizes: ["One Size"],
    colors: ["Teal", "Forest Green", "Natural"],
    featured: false,
  },
  {
    id: "terrawear-hat",
    name: "TerraWear Eco Cap",
    collection: "terrawear",
    category: "hat",
    price: 15,
    originalPrice: 15,
    rating: 4.5,
    reviews: 63,
    image: "/placeholder-xnfu7.png",
    description: "Organic cotton cap with environmental fertility messaging",
    sizes: ["One Size"],
    colors: ["Teal", "Forest Green", "White"],
    featured: false,
  },
]

export default function MerchPage() {
  const [selectedCollection, setSelectedCollection] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>({})
  const [selectedColor, setSelectedColor] = useState<{ [key: string]: string }>({})
  const { addToCart, isOpen, setIsOpen } = useCart()

  const filteredProducts = products.filter((product) => {
    const collectionMatch = selectedCollection === "all" || product.collection === selectedCollection
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
    return collectionMatch && categoryMatch
  })

  const handleAddToCart = (product: any) => {
    const size = selectedSize[product.id] || product.sizes[0]
    const color = selectedColor[product.id] || product.colors[0]

    addToCart({
      id: `${product.id}-${size}-${color}`,
      name: `${product.name} (${size}, ${color})`,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSize((prev) => ({ ...prev, [productId]: size }))
  }

  const handleColorSelect = (productId: string, color: string) => {
    setSelectedColor((prev) => ({ ...prev, [productId]: color }))
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <Cart />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-50 via-white to-rose-50 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder-d19al.png')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-purple-500" />
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700">
                  New Collections Available
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                FertiTerra
                <span className="block bg-gradient-to-r from-purple-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                  Merch Store
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Wear your support for fertility awareness with our exclusive collections. Every purchase helps spread
                education, break stigmas, and empower reproductive health worldwide.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-500" />
                  <span>Worldwide Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-rose-500" />
                  <span>Ethically Made</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>Supporting Education</span>
                </div>
              </div>

              <Button
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                View Cart
              </Button>
            </div>
          </div>
        </section>

        {/* Collections Navigation */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Shop by Collection</h2>
                <p className="text-gray-600">Each collection tells a unique story of fertility empowerment</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  variant={selectedCollection === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCollection("all")}
                  className="rounded-full px-6 py-2"
                >
                  All Collections
                </Button>
                {collections.map((collection) => (
                  <Button
                    key={collection.id}
                    variant={selectedCollection === collection.id ? "default" : "outline"}
                    onClick={() => setSelectedCollection(collection.id)}
                    className="rounded-full px-6 py-2"
                  >
                    {collection.name}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant={selectedCategory === "all" ? "secondary" : "ghost"}
                  onClick={() => setSelectedCategory("all")}
                  size="sm"
                  className="rounded-full"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  All Items
                </Button>
                <Button
                  variant={selectedCategory === "t-shirt" ? "secondary" : "ghost"}
                  onClick={() => setSelectedCategory("t-shirt")}
                  size="sm"
                  className="rounded-full"
                >
                  T-Shirts
                </Button>
                <Button
                  variant={selectedCategory === "tote" ? "secondary" : "ghost"}
                  onClick={() => setSelectedCategory("tote")}
                  size="sm"
                  className="rounded-full"
                >
                  Tote Bags
                </Button>
                <Button
                  variant={selectedCategory === "hat" ? "secondary" : "ghost"}
                  onClick={() => setSelectedCategory("hat")}
                  size="sm"
                  className="rounded-full"
                >
                  Hats & Caps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {selectedCollection !== "all" && (
                <div className="text-center mb-12">
                  {collections.find((c) => c.id === selectedCollection) && (
                    <div className="max-w-2xl mx-auto">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {collections.find((c) => c.id === selectedCollection)?.name}
                      </h2>
                      <p className="text-gray-600 text-lg">
                        {collections.find((c) => c.id === selectedCollection)?.description}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white hover:bg-gray-50 transform hover:-translate-y-2">
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        {product.featured && (
                          <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-rose-500 text-white">
                            Featured
                          </Badge>
                        )}

                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {collections.find((c) => c.id === product.collection)?.name}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                              {product.originalPrice !== product.price && (
                                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                              )}
                            </div>

                            {/* Size Selector */}
                            {product.sizes.length > 1 && (
                              <div className="space-y-2">
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Size</p>
                                <div className="flex flex-wrap gap-2">
                                  {product.sizes.map((size) => (
                                    <Button
                                      key={size}
                                      variant={selectedSize[product.id] === size ? "default" : "outline"}
                                      size="sm"
                                      onClick={() => handleSizeSelect(product.id, size)}
                                      className="h-8 px-3 text-xs rounded-md"
                                    >
                                      {size}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Color Selector */}
                            <div className="space-y-2">
                              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Color</p>
                              <div className="flex flex-wrap gap-2">
                                {product.colors.map((color) => (
                                  <Button
                                    key={color}
                                    variant={selectedColor[product.id] === color ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => handleColorSelect(product.id, color)}
                                    className="h-8 px-3 text-xs rounded-md"
                                  >
                                    {color}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-6 pt-0 space-y-3">
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>

                        <Link href={`/shop/${product.id}`} className="block">
                          <Button
                            variant="outline"
                            className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-lg transition-all duration-300 bg-transparent"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Banner */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-rose-500 to-orange-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Purchase Makes a Difference</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                When you shop FertiTerra merch, you're not just getting premium quality products – you're supporting
                fertility education, breaking stigmas, and empowering reproductive health awareness across Africa and
                beyond.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">25%</div>
                  <p className="text-sm opacity-80">of profits support fertility education programs</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">10K+</div>
                  <p className="text-sm opacity-80">women reached through our awareness campaigns</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <p className="text-sm opacity-80">healthcare providers trained in fertility care</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FertiTerra Merch?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Premium quality meets meaningful impact. Every item is crafted with care and purpose.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethically Made</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sustainably sourced materials and fair labor practices for conscious consumers.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    High-quality materials and printing that lasts, ensuring your message endures.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Join thousands of advocates spreading fertility awareness and breaking stigmas.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Shipping</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Worldwide delivery to spread fertility awareness across continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wear Your Support, Share Your Story</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every piece in our collection represents hope, strength, and the belief that every fertility journey
                matters. Join our community of advocates making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  View Cart & Checkout
                </Button>
                <Link href="/about/team">
                  <Button
                    variant="outline"
                    className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-purple-400 hover:text-purple-600 transition-all duration-300 bg-transparent"
                  >
                    Meet Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
