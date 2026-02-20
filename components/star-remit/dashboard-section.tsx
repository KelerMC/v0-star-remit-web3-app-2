"use client"

import { Copy, Check, ExternalLink, TrendingUp, ArrowDownLeft, ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface DashboardSectionProps {
  walletAddress: string
  balance: string
}

export function DashboardSection({
  walletAddress,
  balance,
}: DashboardSectionProps) {
  const [copied, setCopied] = useState(false)

  const truncated = `${walletAddress.slice(0, 8)}...${walletAddress.slice(-8)}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const recentTx = [
    {
      type: "sent",
      to: "GBXR...7K4P",
      amount: "-120.50",
      time: "2 min ago",
    },
    {
      type: "received",
      to: "GDKF...M2LP",
      amount: "+500.00",
      time: "1 hour ago",
    },
    {
      type: "sent",
      to: "GACV...Q9RN",
      amount: "-75.25",
      time: "3 hours ago",
    },
  ]

  return (
    <section id="dashboard" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Your Wallet
          </h2>
          <p className="text-muted-foreground">
            Overview of your Stellar account
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Balance card */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-[oklch(0.65_0.25_275/0.1)] to-[oklch(0.55_0.2_250/0.05)] p-8 backdrop-blur-sm">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[oklch(0.65_0.25_275/0.3)] bg-[oklch(0.65_0.25_275/0.1)] px-3 py-1 text-xs font-medium text-[oklch(0.75_0.2_275)]">
                  Testnet
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-emerald-400">Connected</span>
                </div>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <p className="font-mono text-sm text-muted-foreground break-all">
                  {truncated}
                </p>
                <button
                  onClick={handleCopy}
                  className="shrink-0 cursor-pointer rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Copy wallet address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
                <a
                  href={`https://stellar.expert/explorer/testnet/account/${walletAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="View on Stellar Explorer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6">
                <p className="text-sm text-muted-foreground">Total Balance</p>
                <p className="mt-1 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                  {balance}{" "}
                  <span className="text-2xl text-muted-foreground md:text-3xl">
                    XLM
                  </span>
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-emerald-400">
                  +2.4% (24h)
                </span>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Quick Actions
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="#send"
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/50 px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)]">
                    <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Send XLM
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Transfer to any Stellar address
                    </p>
                  </div>
                </a>
                <button className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-border/60 bg-secondary/50 px-4 py-3 text-left transition-colors hover:bg-secondary">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[oklch(0.55_0.2_250/0.2)]">
                    <ArrowDownLeft className="h-4 w-4 text-[oklch(0.7_0.18_250)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Receive XLM
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Share your wallet address
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-1 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Network
              </h3>
              <p className="text-xs text-muted-foreground">
                Stellar Testnet (Horizon)
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-400">Operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent transactions */}
        <div className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Recent Transactions
          </h3>
          <div className="flex flex-col divide-y divide-border/40">
            {recentTx.map((tx, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      tx.type === "sent"
                        ? "bg-[oklch(0.65_0.25_275/0.15)]"
                        : "bg-emerald-400/15"
                    }`}
                  >
                    {tx.type === "sent" ? (
                      <ArrowUpRight className="h-4 w-4 text-[oklch(0.75_0.2_275)]" />
                    ) : (
                      <ArrowDownLeft className="h-4 w-4 text-emerald-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {tx.type === "sent" ? "Sent" : "Received"}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {tx.to}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-semibold ${
                      tx.type === "sent"
                        ? "text-foreground"
                        : "text-emerald-400"
                    }`}
                  >
                    {tx.amount} XLM
                  </p>
                  <p className="text-xs text-muted-foreground">{tx.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
