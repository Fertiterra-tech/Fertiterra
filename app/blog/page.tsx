import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FertiTerra Blog - Expert Insights on Fertility",
  description:
    "Read the latest articles on fertility testing, reproductive health, and family planning from the experts at FertiTerra.",
}

const articles = [
  {
    slug: "track-fertility-naturally",
    title: "How to Track Your Fertility Naturally",
    summary: "Learn natural methods to track your cycle and identify your fertile window.",
  },
  {
    slug: "understanding-amh-levels",
    title: "Understanding AMH Levels in Women",
    summary: "Find out what AMH levels mean for your fertility and what to do with the information.",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">FertiTerra Blog</h1>
      <p className="text-gray-600 mb-8">
        Welcome to the FertiTerra blog. Explore our articles for expert insights on fertility, reproductive health, and
        family planning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.slug} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${article.slug}`} className="hover:text-blue-600">
                {article.title}
              </Link>
            </h2>
            <p className="text-gray-700">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
