type Item = { title: string; body: string }
type Col = { title: string; items: string[] }

export type Section =
  | { kind: "prose"; title: string; body?: string; bullets?: string[] }
  | { kind: "steps"; title: string; intro?: string; items: Item[] }
  | { kind: "cards"; title: string; intro?: string; items: Item[] }
  | { kind: "compare"; title: string; intro?: string; left: Col; right: Col }
  | { kind: "price"; title: string; body?: string; items: { label: string; value: string }[]; note?: string }
  | { kind: "cta"; title: string; body?: string; label: string; href: string }
  | { kind: "faq"; title: string; items: { q: string; a: string }[] }
  | { kind: "links"; title: string; items: { title: string; href: string }[] }

export type ContentEntry = {
  h1: string
  intro: string
  heroCta?: { label: string; href: string }
  sections: Section[]
}
