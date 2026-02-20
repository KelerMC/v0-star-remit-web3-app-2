"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/star-remit/navbar"
import { HeroSection } from "@/components/star-remit/hero-section"
import { DashboardSection } from "@/components/star-remit/dashboard-section"
import { SendForm } from "@/components/star-remit/send-form"
import { Footer } from "@/components/star-remit/footer"

// Demo wallet data
const DEMO_WALLET = "GBXR4IQKFNAAWVYO6XDPMFEQCPMAAGJ3GYXIQVT6PQ2LFMXPJ7K4PQH"
const DEMO_BALANCE = "10,482.75"

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = useCallback(() => {
    setIsConnected(true)
    // Scroll to dashboard after connecting
    setTimeout(() => {
      document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar
        isConnected={isConnected}
        onConnect={handleConnect}
        walletAddress={DEMO_WALLET}
      />

      <HeroSection isConnected={isConnected} onConnect={handleConnect} />

      {isConnected && (
        <>
          <DashboardSection
            walletAddress={DEMO_WALLET}
            balance={DEMO_BALANCE}
          />
          <SendForm />
        </>
      )}

      <Footer />
    </main>
  )
}
