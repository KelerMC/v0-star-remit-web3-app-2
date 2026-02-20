"use client"

import { Wallet, Menu, X } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  isConnected: boolean
  onConnect: () => void
  walletAddress: string
}

export function Navbar({ isConnected, onConnect, walletAddress }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const truncated = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : ""

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            StarRemit
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#dashboard"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </a>
          <a
            href="#send"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Send
          </a>
        </div>

        <div className="hidden md:block">
          {isConnected ? (
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-sm text-foreground">
                {truncated}
              </span>
            </div>
          ) : (
            <button
              onClick={onConnect}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </button>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#dashboard"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </a>
            <a
              href="#send"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Send
            </a>
            {isConnected ? (
              <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 self-start">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-sm text-foreground">
                  {truncated}
                </span>
              </div>
            ) : (
              <button
                onClick={() => {
                  onConnect()
                  setMobileOpen(false)
                }}
                className="flex cursor-pointer items-center gap-2 self-start rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
