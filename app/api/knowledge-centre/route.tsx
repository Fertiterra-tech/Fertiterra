import { NextResponse } from "next/server"

const articles = [
  {
    id: 1,
    title: "Understanding Infertility Stigma in Africa",
    slug: "infertility-stigma-africa",
    author: "Dr. Lilian Igweze",
    category: "Awareness & Education",
    tags: ["infertility", "stigma", "Africa", "awareness"],
    date: "2025-01-15",
    featuredImage: "/infertility-awareness-africa.png",
    summary:
      "Explore the cultural and social factors contributing to the stigma surrounding infertility in Africa and its impact on individuals and couples.",
    content: `
      <p>Infertility affects millions of people worldwide, but in Africa, it often carries a heavy social stigma. This article delves into the cultural and social factors that contribute to this stigma, such as societal expectations around childbearing, gender roles, and traditional beliefs. We examine the impact of this stigma on individuals and couples, including emotional distress, social isolation, and barriers to accessing care.</p>

      <p>Furthermore, we discuss strategies for reducing infertility stigma in Africa, such as raising awareness, challenging harmful stereotypes, and promoting open conversations about reproductive health. By addressing the root causes of infertility stigma, we can create a more supportive and inclusive environment for those struggling to conceive.</p>

      <p>Infertility is a disease of the reproductive system defined by the failure to achieve a clinical pregnancy after 12 months or more of regular unprotected sexual intercourse. Consequences include depression, anxiety, economic hardships and stigma.</p>

      <p>In many African cultures, having children is seen as a sign of status, success and family continuity. Infertility can therefore have devastating consequences for individuals and couples. Women who are unable to conceive may face discrimination, rejection, and even violence.</p>

      <p>Traditional beliefs about the causes and cures for infertility can also perpetuate stigma and discrimination. Some people believe that infertility is caused by witchcraft or curses, while others may seek help from traditional healers rather than medical professionals.</p>

      <p>Confronting the stigma surrounding infertility in Africa requires a multifaceted approach, including raising awareness, promoting open conversations, challenging harmful stereotypes, and advocating for policies that support access to care and protect the rights of people affected by infertility.</p>
    `,
    readTime: 7,
    views: 1250,
    likes: 85,
    shares: 32,
    videoUrl: "https://www.youtube.com/embed/ZBRYe9_0X0w?si=fOKeTvNbgG6CfYTI",
  },
  {
    id: 2,
    title: "Understanding Fertility Testing in Africa",
    slug: "fertility-testing-africa",
    author: "Dr. Smart Akuma",
    category: "Fertility Testing",
    tags: ["fertility testing", "diagnosis", "Africa", "options"],
    date: "2025-02-01",
    featuredImage: "/fertility-education.png",
    summary:
      "A comprehensive overview of available fertility testing options in Africa, helping individuals make informed decisions about their reproductive health.",
    content: "<p>Content for Fertility Testing in Africa article</p>",
    readTime: 5,
    views: 890,
    likes: 62,
    shares: 18,
  },
  {
    id: 3,
    title: "Breaking Cultural Barriers in Reproductive Health",
    slug: "cultural-barriers-reproductive-health",
    author: "Dr. Kelechi Okoro",
    category: "Awareness & Education",
    tags: ["culture", "barriers", "reproductive health", "Africa"],
    date: "2025-02-15",
    featuredImage: "/fertility-education.png",
    summary:
      "Exploring how cultural sensitivity can improve reproductive healthcare outcomes in diverse African communities.",
    content: "<p>Content for Cultural Barriers in Reproductive Health article</p>",
    readTime: 6,
    views: 720,
    likes: 48,
    shares: 25,
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")
  const category = searchParams.get("category")
  const search = searchParams.get("search")

  if (slug) {
    const article = articles.find((article) => article.slug === slug)
    if (article) {
      return NextResponse.json(article)
    } else {
      return NextResponse.json({ success: false, message: "Article not found" }, { status: 404 })
    }
  }

  let filteredArticles = [...articles]

  if (category) {
    filteredArticles = filteredArticles.filter((article) => article.category === category)
  }

  if (search) {
    filteredArticles = filteredArticles.filter((article) => {
      const searchTerm = search.toLowerCase()
      return (
        article.title.toLowerCase().includes(searchTerm) ||
        article.summary.toLowerCase().includes(searchTerm) ||
        article.author.toLowerCase().includes(searchTerm) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      )
    })
  }

  return NextResponse.json({ success: true, articles: filteredArticles })
}
