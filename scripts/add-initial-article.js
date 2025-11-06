// This script adds the initial article about infertility stigma to the knowledge centre
// In a production environment, this would interact with your actual database

const initialArticle = {
  title: "Why Talking About Infertility Matters: Breaking the Stigma in Africa",
  slug: "why-talking-about-infertility-matters",
  author: "FertiTerra Editorial Team",
  category: "Awareness & Education",
  tags: ["Infertility Awareness", "Africa", "Fertility Support", "Breaking the Stigma"],
  date: "2025-08-15",
  featuredImage: "/images/infertility-stigma-africa.jpg",
  videoEmbed: "https://drive.google.com/file/d/1cVlWf_jUwplYs_0keky7VuJ2rQvyhdL-/preview",
  summary:
    "Infertility affects 1 in 6 couples globally, but in Africa, stigma and silence make the journey even harder. Learn why open conversations matter — and how we can replace stigma with hope.",
  content: `Infertility affects 1 in 6 couples globally, according to the World Health Organization. But in many African communities, the topic is still whispered about, hidden behind closed doors, and sometimes not spoken about at all.

Instead of compassion and understanding, those struggling with infertility often face stigma, blame, and isolation. This silence causes emotional pain — and delays people from seeking medical help.

At FertiTerra, we believe infertility is not a taboo — it's a medical condition. And open conversations are the first step to changing lives.

## The Weight of Silence
In certain cultures, infertility is wrongly seen as a woman's problem. Men are rarely tested first, and couples may face pressure from extended family or even risk marital breakdown.
This silence has real consequences: delayed diagnosis, untreated health conditions, and deep emotional scars.

## Why We Must Speak Up
**Encourages Early Diagnosis**  
When people feel safe talking about fertility challenges, they are more likely to seek medical help quickly. Early testing means faster answers and better treatment options.

**Reduces Emotional Isolation**  
Silence makes people feel alone in their struggles. By sharing our stories, we remind others that they are not the only ones.

**Dismantles Harmful Myths**  
Myths like "infertility is always the woman's fault" or "traditional medicine can cure everything" keep people from getting accurate diagnoses.

**Builds Supportive Communities**  
A society that listens and supports makes the journey less lonely and more hopeful.

## A Personal Story
When Amina and James tried for three years to have a baby, they didn't tell anyone. In their community, fertility problems were seen as a curse.  
After learning more from a friend, they finally sought testing — and discovered James had a treatable condition.  
Today, they are expecting their first child. Their only regret? Waiting so long because of fear and stigma.

## FertiTerra's Role in Breaking the Silence
We provide affordable, discreet fertility test kits and education for African couples and individuals.  
Our mission is simple: make fertility care accessible, remove the shame, and give families hope.

## Your Voice Matters
You can help break the stigma:
- Talk openly about fertility with friends and family.
- Share accurate information and challenge myths.
- Support those going through fertility struggles without judgment.

💬 **Final Thought:** Infertility does not define anyone's worth. With understanding, education, and open conversation, we can replace silence with support — and stigma with hope.`,
}

async function addInitialArticle() {
  try {
    const response = await fetch("/api/knowledge-centre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initialArticle),
    })

    const result = await response.json()

    if (result.success) {
      console.log("✅ Initial article added successfully!")
      console.log("Article ID:", result.article.id)
      console.log("Article URL:", `/knowledge-centre/${result.article.slug}`)
    } else {
      console.error("❌ Failed to add article:", result.error)
    }
  } catch (error) {
    console.error("❌ Error adding article:", error)
  }
}

// Run the script
addInitialArticle()
