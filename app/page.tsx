"use client"

import { Navbar } from "@/components/star-remit/navbar"
import { RoleSelector } from "@/components/star-remit/role-selector"
import { Marketplace } from "@/components/star-remit/marketplace"
import { ProducerDashboard } from "@/components/star-remit/producer-dashboard"
import { BuyerDashboard } from "@/components/star-remit/buyer-dashboard"
import { Footer } from "@/components/star-remit/footer"
import { useWallet } from "@/contexts/wallet-context"

export default function Home() {
  const { role } = useWallet()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {!role && <RoleSelector />}
      
      {role === 'producer' && <ProducerDashboard />}
      
      {role === 'buyer' && (
        <>
          <Marketplace />
          <BuyerDashboard />
        </>
      )}

      <Footer />
    </main>
  )
}
