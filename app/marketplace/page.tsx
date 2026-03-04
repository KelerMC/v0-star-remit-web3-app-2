"use client"

import { Navbar } from "@/components/star-remit/navbar"
import { Marketplace } from "@/components/star-remit/marketplace"
import { Footer } from "@/components/star-remit/footer"

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Marketplace />
      <Footer />
    </main>
  )
}
