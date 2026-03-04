"use client"

import { useState } from "react"
import { Wallet, TrendingUp, Download, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle, XCircle, DollarSign, AlertCircle } from "lucide-react"

interface Transaction {
  id: string
  type: "income" | "withdrawal" | "pending"
  orderId?: string
  buyer?: string
  amount: number
  commission?: number
  fee?: number
  netAmount: number
  date: string
  status: "completed" | "pending" | "failed"
}

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "TXN-001",
    type: "income",
    orderId: "ORD-1234",
    buyer: "Fresh Market USA",
    amount: 2500,
    commission: 50,
    fee: 0.15,
    netAmount: 2449.85,
    date: "Hace 2 horas",
    status: "completed"
  },
  {
    id: "TXN-002",
    type: "pending",
    orderId: "ORD-1235",
    buyer: "Berlin Organic Store",
    amount: 1160,
    commission: 23.20,
    fee: 0.15,
    netAmount: 1136.65,
    date: "Entrega en 3 días",
    status: "pending"
  },
  {
    id: "TXN-003",
    type: "withdrawal",
    amount: 5000,
    fee: 93.60,
    netAmount: 4906.40,
    date: "Hace 1 día",
    status: "completed"
  },
  {
    id: "TXN-004",
    type: "income",
    orderId: "ORD-1232",
    buyer: "Tokyo Premium Foods",
    amount: 625,
    commission: 12.50,
    fee: 0.15,
    netAmount: 612.35,
    date: "Hace 3 días",
    status: "completed"
  }
]

export function WalletDashboard() {
  const [transactions] = useState<Transaction[]>(MOCK_TRANSACTIONS)
  const [showWithdrawModal, setShowWithdrawModal] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState("")

  const availableBalance = 42350.85
  const escrowBalance = 5860.00
  const exchangeRate = 3.72
  const balanceInPEN = availableBalance * exchangeRate

  const calculateWithdrawal = (amount: number) => {
    const conversionFee = amount * 0.005 // 0.5%
    const transferFee = 5.00 / exchangeRate // ~$1.34
    const totalFees = conversionFee + transferFee
    const netAmount = amount - totalFees
    return {
      amount,
      conversionFee,
      transferFee,
      totalFees,
      netAmount,
      penAmount: netAmount * exchangeRate
    }
  }

  const withdrawal = calculateWithdrawal(parseFloat(withdrawAmount) || 1000)

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            💎 Mi Monedero Digital
          </h1>
          <p className="text-muted-foreground">
            Gestiona tus fondos en USDC y retiros a banco peruano
          </p>
        </div>

        {/* Balance Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Available Balance */}
          <div className="rounded-2xl border border-[oklch(0.58_0.14_165)]/30 bg-gradient-to-br from-[oklch(0.58_0.14_165)]/20 to-[oklch(0.55_0.12_230)]/10 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)]">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Balance Disponible</p>
                <p className="text-xs text-muted-foreground/70">USDC en Stellar Network</p>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-5xl font-bold text-foreground">
                ${availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">USDC</p>
            </div>

            <div className="mb-6 flex items-baseline gap-2">
              <p className="text-2xl font-semibold text-[oklch(0.58_0.14_165)]">
                ≈ S/ {balanceInPEN.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-muted-foreground">PEN (TC: {exchangeRate})</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowWithdrawModal(true)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Download className="h-5 w-5" />
                Retirar a Banco
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-card/80">
                <TrendingUp className="h-5 w-5" />
                Historial
              </button>
            </div>
          </div>

          {/* Escrow Balance */}
          <div className="rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                <Clock className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">En Protección</p>
                <p className="text-xs text-muted-foreground/70">Fondos en escrow</p>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-4xl font-bold text-foreground">
                ${escrowBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">USDC</p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-muted-foreground">
                3 pedidos pendientes de confirmación
              </p>
            </div>

            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <div className="text-sm text-muted-foreground">
                  Los fondos se liberarán automáticamente cuando los compradores confirmen la recepción de los productos.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Info */}
        <div className="mb-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
              <DollarSign className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold text-foreground">
                Estructura de Comisiones
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm text-muted-foreground">Comisión EcoXport</p>
                  <p className="text-2xl font-bold text-blue-400">2%</p>
                  <p className="text-xs text-muted-foreground">Por transacción exitosa</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fee Stellar</p>
                  <p className="text-2xl font-bold text-blue-400">$0.15</p>
                  <p className="text-xs text-muted-foreground">Por transacción blockchain</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Retiro a banco</p>
                  <p className="text-2xl font-bold text-blue-400">0.5%</p>
                  <p className="text-xs text-muted-foreground">+ S/ 5.00 transferencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions History */}
        <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">📈 Últimas Transacciones</h3>
            <button className="text-sm text-[oklch(0.58_0.14_165)] hover:underline">
              Ver todas
            </button>
          </div>

          <div className="space-y-3">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="rounded-xl border border-border/40 bg-card/30 p-5 transition-colors hover:border-[oklch(0.58_0.14_165)]/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-1 gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)]/20 to-[oklch(0.55_0.12_230)]/10">
                      {tx.type === "income" && <ArrowDownLeft className="h-5 w-5 text-emerald-400" />}
                      {tx.type === "withdrawal" && <ArrowUpRight className="h-5 w-5 text-blue-400" />}
                      {tx.type === "pending" && <Clock className="h-5 w-5 text-yellow-400" />}
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold text-foreground">
                          {tx.type === "income" && `Pedido ${tx.orderId} - ${tx.buyer}`}
                          {tx.type === "withdrawal" && "Retiro a Banco"}
                          {tx.type === "pending" && `Pedido ${tx.orderId} - ${tx.buyer} (En escrow)`}
                        </p>
                        {tx.status === "completed" && <CheckCircle className="h-4 w-4 text-emerald-400" />}
                        {tx.status === "pending" && <Clock className="h-4 w-4 text-yellow-400" />}
                        {tx.status === "failed" && <XCircle className="h-4 w-4 text-red-400" />}
                      </div>

                      <p className="mb-2 text-xs text-muted-foreground">{tx.date}</p>

                      {tx.type !== "withdrawal" && tx.commission !== undefined && (
                        <div className="text-xs text-muted-foreground">
                          <div className="grid grid-cols-3 gap-2">
                            <div>Precio pactado: <span className="font-semibold text-foreground">${tx.amount.toFixed(2)}</span></div>
                            <div>Comisión (2%): <span className="font-semibold text-red-400">-${tx.commission.toFixed(2)}</span></div>
                            <div>Fee Stellar: <span className="font-semibold text-red-400">-${tx.fee?.toFixed(2)}</span></div>
                          </div>
                        </div>
                      )}

                      {tx.type === "withdrawal" && (
                        <div className="text-xs text-muted-foreground">
                          Retiro procesado · Fee: S/ {(tx.fee || 0) * exchangeRate}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      tx.type === "income" || tx.type === "pending" ? "text-emerald-400" : "text-blue-400"
                    }`}>
                      {tx.type === "withdrawal" ? "-" : "+"}${tx.netAmount.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">USDC</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Withdrawal Modal */}
        {showWithdrawModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-2xl">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                💳 Retirar a Banco Peruano
              </h2>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-muted-foreground">
                  Monto a retirar (USDC)
                </label>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="1000"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-lg font-semibold text-foreground focus:border-[oklch(0.58_0.14_165)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.14_165)]/20"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  Disponible: ${availableBalance.toLocaleString('en-US')}
                </p>
              </div>

              <div className="mb-6 rounded-xl border border-border/60 bg-card/50 p-6">
                <h3 className="mb-4 font-semibold text-foreground">Conversión actual:</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monto a retirar:</span>
                    <span className="font-semibold text-foreground">${withdrawal.amount.toFixed(2)} USDC</span>
                  </div>
                  
                  <div className="h-px bg-border"></div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tipo de cambio:</span>
                    <span className="font-semibold text-foreground">{exchangeRate} PEN/USD</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee conversión (0.5%):</span>
                    <span className="font-semibold text-red-400">-${withdrawal.conversionFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee transferencia:</span>
                    <span className="font-semibold text-red-400">-${withdrawal.transferFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="h-px bg-border"></div>
                  
                  <div className="flex justify-between text-base">
                    <span className="font-semibold text-foreground">Recibirás en tu cuenta:</span>
                    <span className="font-bold text-[oklch(0.58_0.14_165)]">
                      S/ {withdrawal.penAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-sm text-muted-foreground">
                    Tiempo estimado: <span className="font-semibold text-foreground">24-48 horas hábiles</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowWithdrawModal(false)}
                  className="flex-1 rounded-xl border border-border bg-secondary px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary/80"
                >
                  Cancelar
                </button>
                <button className="flex-1 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90">
                  Confirmar Retiro
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
