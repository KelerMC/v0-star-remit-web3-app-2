"use client"

import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"

type SendStatus = "idle" | "sending" | "success" | "error"

export function SendForm() {
  const [destination, setDestination] = useState("")
  const [amount, setAmount] = useState("")
  const [memo, setMemo] = useState("")
  const [status, setStatus] = useState<SendStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!destination || !amount) return

    setStatus("sending")

    // Simulated transaction
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Randomly succeed or fail for demo
    const success = Math.random() > 0.2
    setStatus(success ? "success" : "error")

    if (success) {
      setTimeout(() => {
        setDestination("")
        setAmount("")
        setMemo("")
        setStatus("idle")
      }, 3000)
    } else {
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const isValid = destination.length >= 10 && parseFloat(amount) > 0

  return (
    <section id="send" className="relative px-6 py-24">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-10 blur-[128px]"
        style={{ background: "oklch(0.65 0.25 275)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Send Payment
          </h2>
          <p className="text-muted-foreground">
            Transfer XLM to any Stellar address instantly
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Destination */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="destination"
                className="text-sm font-medium text-foreground"
              >
                Destination Address
              </label>
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="G..."
                className="rounded-xl border border-border bg-input px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none"
                disabled={status === "sending"}
              />
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="amount"
                className="text-sm font-medium text-foreground"
              >
                Amount (XLM)
              </label>
              <div className="relative">
                <input
                  id="amount"
                  type="number"
                  step="0.0000001"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 pr-16 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none"
                  disabled={status === "sending"}
                />
                <span className="absolute top-1/2 right-4 -translate-y-1/2 text-sm font-medium text-muted-foreground">
                  XLM
                </span>
              </div>
            </div>

            {/* Memo */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="memo"
                className="text-sm font-medium text-foreground"
              >
                Memo{" "}
                <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                id="memo"
                type="text"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="Payment for..."
                className="rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none"
                disabled={status === "sending"}
              />
            </div>

            {/* Fee estimate */}
            <div className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-3">
              <span className="text-sm text-muted-foreground">
                Estimated Fee
              </span>
              <span className="text-sm font-medium text-foreground">
                0.00001 XLM
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || status === "sending"}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  Sent Successfully
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle className="h-5 w-5" />
                  Transaction Failed
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Payment
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
