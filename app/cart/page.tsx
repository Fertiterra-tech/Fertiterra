"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import { useCart } from "@/context/cart-context"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

const GREEN = "#1F3D33"
const CREAM = "#FAF7F2"
const MINT = "#E4EDE6"
const INK = "#1F2328"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotal } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [promoError, setPromoError] = useState("")

  const applyPromoCode = () => {
    const code = promoCode.trim().toLowerCase()
    if (code === "welcome10") {
      setDiscount(0.1)
      setPromoError("")
    } else if (code === "fertility20") {
      setDiscount(0.2)
      setPromoError("")
    } else {
      setDiscount(0)
      setPromoError("That code is not valid.")
    }
  }

  const subtotal = getTotal()
  const discountAmount = subtotal * discount
  const total = subtotal - discountAmount

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: CREAM, color: INK }}>
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 sm:px-10 lg:px-20 lg:pt-14">
          <h1
            className="text-[32px] leading-[1.1] sm:text-[42px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}
          >
            Your basket
          </h1>

          {items.length === 0 ? (
            <div className="mt-10 max-w-[520px] rounded-2xl bg-white p-9">
              <ShoppingBag className="h-10 w-10" strokeWidth={1.4} style={{ color: GREEN }} />
              <p className="mt-5 text-[18px] font-semibold" style={{ color: GREEN }}>
                Your basket is empty
              </p>
              <p className="mt-2 text-[15px] leading-[24px] opacity-80">
                Start with the hormone and fertility test, or browse the appointments.
              </p>
              <Link
                href="/test-kits"
                className="mt-6 inline-flex h-[48px] items-center justify-center rounded-full px-7 text-[15px] font-semibold text-white"
                style={{ backgroundColor: GREEN }}
              >
                See the test
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-10 pb-20 lg:grid-cols-[1fr_380px] lg:gap-14">
              <div>
                <div className="overflow-hidden rounded-2xl bg-white">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-wrap items-center gap-5 border-b p-5 last:border-b-0 sm:flex-nowrap"
                      style={{ borderColor: "rgba(31,35,40,0.08)" }}
                    >
                      {item.image ? (
                        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl" style={{ backgroundColor: MINT }}>
                          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="72px" />
                        </div>
                      ) : (
                        <div className="h-[72px] w-[72px] shrink-0 rounded-xl" style={{ backgroundColor: MINT }} />
                      )}

                      <div className="min-w-[140px] flex-1">
                        <p className="text-[15px] font-semibold leading-[22px]" style={{ color: GREEN }}>
                          {item.name}
                        </p>
                        <p className="mt-1 text-[14px] opacity-70">{item.price.toLocaleString()} RWF</p>
                      </div>

                      <div className="flex items-center gap-1 rounded-full border" style={{ borderColor: "rgba(31,35,40,0.15)" }}>
                        <button
                          type="button"
                          aria-label={"Decrease quantity of " + item.name}
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="flex h-9 w-9 items-center justify-center rounded-full"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-[14px] font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={"Increase quantity of " + item.name}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <p className="w-[90px] text-right text-[15px] font-semibold" style={{ color: GREEN }}>
                        {(item.price * item.quantity).toLocaleString()} RWF
                      </p>

                      <button
                        type="button"
                        aria-label={"Remove " + item.name}
                        onClick={() => removeFromCart(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full opacity-50 hover:opacity-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white p-5">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ color: GREEN }}>
                    Promo code
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="h-[44px] flex-1 rounded-full border px-5 text-[14px] outline-none"
                      style={{ borderColor: "rgba(31,35,40,0.15)", backgroundColor: CREAM }}
                    />
                    <button
                      type="button"
                      onClick={applyPromoCode}
                      className="h-[44px] rounded-full px-6 text-[14px] font-semibold"
                      style={{ backgroundColor: MINT, color: GREEN }}
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="mt-2 text-[13px]" style={{ color: "#FF4244" }}>{promoError}</p>}
                </div>
              </div>

              <aside className="h-fit rounded-2xl bg-white p-7 lg:sticky lg:top-28">
                <p className="text-[18px] font-semibold" style={{ color: GREEN }}>
                  Order summary
                </p>
                <div className="mt-5 space-y-3 text-[14px]">
                  <div className="flex justify-between">
                    <span className="opacity-70">Subtotal</span>
                    <span>{subtotal.toLocaleString()} RWF</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="opacity-70">Discount ({Math.round(discount * 100)}%)</span>
                      <span style={{ color: GREEN }}>-{discountAmount.toLocaleString()} RWF</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t pt-3 text-[16px] font-semibold" style={{ borderColor: "rgba(31,35,40,0.1)", color: GREEN }}>
                    <span>Total</span>
                    <span>{total.toLocaleString()} RWF</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="mt-6 flex h-[48px] w-full items-center justify-center rounded-full text-[15px] font-semibold text-white"
                  style={{ backgroundColor: GREEN }}
                >
                  Checkout
                </Link>
                <Link href="/test-kits" className="mt-3 block text-center text-[13px] underline opacity-70">
                  Continue shopping
                </Link>
                <p className="mt-5 text-[12px] leading-[18px] opacity-60">
                  Payment is taken securely at checkout. Your results are reviewed by a clinician before they are released.
                </p>
              </aside>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
