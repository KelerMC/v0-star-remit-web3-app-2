"use client"

import { Users, Sprout } from "lucide-react"
import { useWallet } from "@/contexts/wallet-context"

export function RoleSelector() {
  const { setRole } = useWallet()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full opacity-20 blur-[128px]"
        style={{ background: "oklch(0.65 0.25 275)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
          ¿Cómo quieres usar{" "}
          <span className="bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] bg-clip-text text-transparent">
            StarRemit?
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
          Conecta productores peruanos con compradores internacionales. Pagos instantáneos, contratos automáticos.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Producer Card */}
          <button
            onClick={() => setRole('producer')}
            className="group cursor-pointer rounded-2xl border-2 border-border/60 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-[oklch(0.65_0.25_275)] hover:bg-card"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] mx-auto">
              <Sprout className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              Soy Productor
            </h3>
            <p className="text-muted-foreground">
              Exporta directamente al mundo. Publica tus productos, recibe pagos instantáneos en crypto, genera documentos automáticamente.
            </p>
            <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Publica productos con certificados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Recibe pagos en USDC/EUR
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Genera facturas SUNAT automáticas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Analytics con IA
              </li>
            </ul>
          </button>

          {/* Buyer Card */}
          <button
            onClick={() => setRole('buyer')}
            className="group cursor-pointer rounded-2xl border-2 border-border/60 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-[oklch(0.55_0.2_250)] hover:bg-card"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.55_0.2_250)] to-[oklch(0.7_0.15_200)] mx-auto">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              Soy Comprador
            </h3>
            <p className="text-muted-foreground">
              Compra productos premium directo de Perú. Verifica calidad con certificados blockchain, pagos seguros con escrow.
            </p>
            <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Productos verificados con certificados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Paga en tu moneda (EUR/USD)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Escrow automático protege tu dinero
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Tracking en tiempo real
              </li>
            </ul>
          </button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Powered by Stellar • Pagos en 3-5 segundos • Fees de $0.00001
        </p>
      </div>
    </section>
  )
}
