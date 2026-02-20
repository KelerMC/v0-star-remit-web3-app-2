"use client"

import { Wallet, Loader2, AlertCircle } from "lucide-react"
import { useWallet } from "@/contexts/wallet-context"
import { Button } from "./button"

export function ConnectWalletButton() {
  const { isConnected, isConnecting, connectWallet, disconnectWallet, address, error } = useWallet()

  const truncated = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}` 
    : ""

  if (isConnected) {
    return (
      <div className="flex items-center gap-2">
        {error && (
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-sm text-foreground">
            {truncated}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={disconnectWallet}
            className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            Disconnect
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      <Button
        onClick={connectWallet}
        disabled={isConnecting}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isConnecting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </>
        )}
      </Button>
    </div>
  )
}
