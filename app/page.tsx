"use client"

import { Navbar } from "@/components/star-remit/navbar"
import { RoleSelector } from "@/components/star-remit/role-selector"
import { Footer } from "@/components/star-remit/footer"
import { useWallet } from "@/contexts/wallet-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { role } = useWallet()
  const router = useRouter()

  useEffect(() => {
    if (role === 'producer') {
      router.push('/dashboard')
    } else if (role === 'buyer') {
      router.push('/marketplace')
    }
  }, [role, router])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <RoleSelector />
      <Footer />
    </main>
  )
}
