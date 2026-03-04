"use client"

import { Users, Sprout } from "lucide-react"
import { useWallet } from "@/contexts/wallet-context"

export function RoleSelector() {
  const { setRole } = useWallet()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background effects - Andes Moderno theme */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[oklch(0.58_0.14_165)]/5 via-background to-[oklch(0.55_0.12_230)]/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[oklch(0.58_0.14_165)] opacity-10 blur-[128px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[oklch(0.55_0.12_230)] opacity-10 blur-[128px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="mb-4 mt-25 text-5xl font-bold text-foreground md:text-6xl">
          ¿Cómo quieres usar{" "}
          <span className="bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] bg-clip-text text-transparent">
            EcoXport?
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-foreground/90">
          🌿 Conecta productores peruanos con compradores internacionales{" "}
          <span className="text-[oklch(0.58_0.14_165)]">•</span> Pagos en segundos{" "}
          <span className="text-[oklch(0.55_0.12_230)]">•</span> Contratos automáticos
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Producer Card */}
          <button
            onClick={() => setRole('producer')}
            className="group cursor-pointer rounded-2xl border-2 border-border/60 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-[oklch(0.58_0.14_165)] hover:bg-card hover:shadow-2xl hover:shadow-[oklch(0.58_0.14_165)]/20 hover:scale-[1.02]"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] mx-auto shadow-lg shadow-[oklch(0.58_0.14_165)]/30 group-hover:scale-110 transition-transform">
              <Sprout className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              Soy Productor
            </h3>
            <p className="text-muted-foreground">
              Exporta directamente al mundo. Publica tus productos, recibe pagos instantáneos en dólares digitales, genera documentos automáticamente.
            </p>
            <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.58_0.14_165)] font-bold">✓</span> Publica productos con certificados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.58_0.14_165)] font-bold">✓</span> Recibe pagos en USDC/EUR
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.58_0.14_165)] font-bold">✓</span> Genera facturas SUNAT automáticas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.58_0.14_165)] font-bold">✓</span> Estadísticas inteligentes de ventas
              </li>
            </ul>
          </button>

          {/* Buyer Card */}
          <button
            onClick={() => setRole('buyer')}
            className="group cursor-pointer rounded-2xl border-2 border-border/60 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-[oklch(0.55_0.12_230)] hover:bg-card hover:shadow-2xl hover:shadow-[oklch(0.55_0.12_230)]/20 hover:scale-[1.02]"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.55_0.12_230)] to-[oklch(0.7_0.15_200)] mx-auto shadow-lg shadow-[oklch(0.55_0.12_230)]/30 group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              Soy Comprador
            </h3>
            <p className="text-muted-foreground">
              Compra productos premium directo de Perú. Verifica calidad con certificados digitales, pagos 100% protegidos.
            </p>
            <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.55_0.12_230)] font-bold">✓</span> Productos verificados con certificados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.55_0.12_230)] font-bold">✓</span> Paga en tu moneda (EUR/USD)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.55_0.12_230)] font-bold">✓</span> Tu dinero protegido hasta recibir el producto
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[oklch(0.55_0.12_230)] font-bold">✓</span> Seguimiento en tiempo real
              </li>
            </ul>
          </button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Tecnología Stellar • Pagos en 3-5 segundos • Comisión de $0.00001
        </p>
      </div>
    </section>
  )
}
