"use client"

import { Navbar } from "@/components/star-remit/navbar"
import { ProductDetail } from "@/components/star-remit/product-detail"
import { Footer } from "@/components/star-remit/footer"
import { use } from "react"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProductDetail id={id} />
      <Footer />
    </main>
  )
}
