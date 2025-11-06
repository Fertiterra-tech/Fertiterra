import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link" // Import Link component

interface Props {
  params: { slug: string }
}

const articles = {
  "track-fertility-naturally": {
    title: "How to Track Your Fertility Naturally",
    content: `
      Many women seek natural methods to understand their bodies and improve chances of conception. Tracking your fertility naturally involves observing and charting various signs that your body exhibits throughout your menstrual cycle.

      Basal Body Temperature (BBT) is the temperature of your body at rest. Charting BBT can help you identify when ovulation occurs. A slight rise in BBT indicates ovulation.

      Cervical mucus changes in consistency throughout your cycle. Observing these changes can help predict ovulation. Leading up to ovulation, cervical mucus becomes clear, slippery, and stretchy.

      Your cervix undergoes positional changes during your cycle. Near ovulation, the cervix becomes softer, higher, open, and wetter (SHOW).

      Tracking your menstrual cycle and predicting ovulation can be empowering, providing valuable insights into your reproductive health. By listening to your body, you can optimize your efforts to conceive naturally.
    `,
  },
  "understanding-amh-levels": {
    title: "Understanding AMH Levels in Women",
    content: `
      Anti-Müllerian Hormone (AMH) levels are often measured as part of a fertility assessment. AMH is produced by granulosa cells in ovarian follicles and reflects the size of the ovarian reserve.

      AMH levels indicate the quantity of eggs remaining in a woman's ovaries. High AMH levels generally suggest a good ovarian reserve, while low levels may indicate diminished ovarian reserve.

      AMH levels can assist in predicting a woman's response to ovarian stimulation during IVF. Women with higher AMH levels may produce more eggs during stimulation.

      AMH levels are relatively stable throughout the menstrual cycle and can be measured at any time. It is important to interpret AMH levels in conjunction with other fertility markers.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export function generateMetadata({ params: { slug } }: Props): Metadata {
  const article = articles[slug]
  if (!article) {
    return {
      title: "Article Not Found",
    }
  }
  return {
    title: article.title,
    description: article.content.substring(0, 150) + "...",
  }
}

export default function ArticlePage({ params: { slug } }: Props) {
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return (
    <div>
      <Link href="/blog" className="text-blue-500 hover:underline">
        Back to Blog
      </Link>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}
