"use client"

import { Navbar } from "@/components/star-remit/navbar"
import { ProducerDashboard } from "@/components/star-remit/producer-dashboard"
import { Footer } from "@/components/star-remit/footer"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProducerDashboard />
      <Footer />
    </main>
  )
}
