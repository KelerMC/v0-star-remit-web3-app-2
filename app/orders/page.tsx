"use client"

import { Navbar } from "@/components/star-remit/navbar"
import { BuyerDashboard } from "@/components/star-remit/buyer-dashboard"
import { Footer } from "@/components/star-remit/footer"

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BuyerDashboard />
      <Footer />
    </main>
  )
}
