"use client"

import { Navbar } from "@/components/star-remit/navbar"
import { HeroSection } from "@/components/star-remit/hero-section"
import { DashboardSection } from "@/components/star-remit/dashboard-section"
import { SendForm } from "@/components/star-remit/send-form"
import { Footer } from "@/components/star-remit/footer"
import { useWallet } from "@/contexts/wallet-context"

export default function Home() {
  const { isConnected, address, balance } = useWallet()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      {isConnected && (
        <>
          <DashboardSection
            walletAddress={address || ""}
            balance={balance || "0.0000000"}
          />
          <SendForm />
        </>
      )}

      <Footer />
    </main>
  )
}
