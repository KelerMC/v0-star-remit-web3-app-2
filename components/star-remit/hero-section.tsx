"use client"

import { Wallet, ArrowRight, Zap, Shield, Globe } from "lucide-react"

interface HeroSectionProps {
  isConnected: boolean
  onConnect: () => void
}

export function HeroSection({ isConnected, onConnect }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full opacity-20 blur-[128px]"
        style={{ background: "oklch(0.65 0.25 275)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/4 h-80 w-80 rounded-full opacity-15 blur-[128px]"
        style={{ background: "oklch(0.55 0.2 250)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-muted-foreground">
            Stellar Network
          </span>
        </div>

        <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          Cross-border payments,{" "}
          <span className="bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] bg-clip-text text-transparent">
            without borders.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Send XLM anywhere in the world in seconds. Built on Stellar for
          lightning-fast, low-cost remittance that just works.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {!isConnected ? (
            <button
              onClick={onConnect}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90"
            >
              <Wallet className="h-5 w-5" />
              Connect Wallet
            </button>
          ) : (
            <a
              href="#dashboard"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90"
            >
              Go to Dashboard
              <ArrowRight className="h-5 w-5" />
            </a>
          )}
          <a
            href="#features"
            className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Stats row */}
        <div
          id="features"
          className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <Zap className="mx-auto mb-3 h-8 w-8 text-[oklch(0.65_0.25_275)]" />
            <p className="text-2xl font-bold text-foreground">{"< 5s"}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Transaction speed
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <Shield className="mx-auto mb-3 h-8 w-8 text-[oklch(0.55_0.2_250)]" />
            <p className="text-2xl font-bold text-foreground">$0.00001</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Average fee
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <Globe className="mx-auto mb-3 h-8 w-8 text-[oklch(0.7_0.15_200)]" />
            <p className="text-2xl font-bold text-foreground">150+</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Supported countries
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
