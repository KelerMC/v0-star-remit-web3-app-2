"use client"

import { ShoppingCart, Clock, CheckCircle2, Shield, MessageSquare } from "lucide-react"

export function BuyerDashboard() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            Dashboard del Comprador
          </h1>
          <p className="text-muted-foreground">
            Gestiona tus órdenes y descubre nuevos productos
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">En tránsito</span>
              <Clock className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">3</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">En escrow</span>
              <Shield className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
            </div>
            <p className="text-3xl font-bold text-foreground">$8,400</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Completadas</span>
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">47</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total gastado</span>
              <ShoppingCart className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">$124K</p>
          </div>
        </div>

        {/* Active Orders with Escrow Status */}
        <div className="mb-8 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <h3 className="mb-6 text-xl font-bold text-foreground">Órdenes Activas</h3>

          <div className="space-y-6">
            {/* Order 1 - In Transit */}
            <div className="rounded-xl border border-border/40 bg-card/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="font-mono text-sm text-muted-foreground">ORD-5678</p>
                  <h4 className="text-xl font-bold text-foreground">Arándanos Orgánicos Premium</h4>
                  <p className="text-sm text-muted-foreground">Agrícola Los Andes SAC · 500 kg</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">$2,250</p>
                  <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                    En tránsito
                  </span>
                </div>
              </div>

              {/* Escrow Progress */}
              <div className="mb-4 rounded-lg border border-[oklch(0.58_0.14_165)]/30 bg-[oklch(0.58_0.14_165)]/10 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
                    <span className="font-medium text-foreground">Smart Escrow Activo</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Paso 3/4</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-muted-foreground">Pago depositado en escrow</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-muted-foreground">Producto enviado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-blue-400 animate-pulse" />
                    <span className="text-sm text-foreground font-medium">En tránsito - Tracking: DHL-789456123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Liberación automática al llegar</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 rounded-xl border border-border bg-secondary px-4 py-2 font-medium text-foreground transition-colors hover:bg-secondary/80">
                  Ver Tracking
                </button>
                <button className="flex-1 rounded-xl bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] px-4 py-2 font-semibold text-white transition-opacity hover:opacity-90">
                  <MessageSquare className="mr-2 inline h-4 w-4" />
                  Contactar Vendedor
                </button>
              </div>
            </div>

            {/* Order 2 - Preparing */}
            <div className="rounded-xl border border-border/40 bg-card/30 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="font-mono text-sm text-muted-foreground">ORD-5679</p>
                  <h4 className="text-xl font-bold text-foreground">Café Especial Geisha</h4>
                  <p className="text-sm text-muted-foreground">Café Selva Alta · 75 kg</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">$937.50</p>
                  <span className="inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">
                    Preparando
                  </span>
                </div>
              </div>

              {/* Escrow Status */}
              <div className="mb-4 rounded-lg border border-[oklch(0.58_0.14_165)]/30 bg-[oklch(0.58_0.14_165)]/10 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
                  <span className="font-medium text-foreground">Pago seguro en escrow</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tu dinero está protegido hasta que confirmes la recepción del producto
                </p>
              </div>

              <button className="w-full rounded-xl border border-border bg-secondary px-4 py-2 font-medium text-foreground transition-colors hover:bg-secondary/80">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <h3 className="mb-6 text-xl font-bold text-foreground">Recomendados para ti</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { name: "Quinoa Blanca Premium", producer: "Andean Grains", price: "$5.80/kg", badge: "USDA Organic" },
              { name: "Mango Kent Export", producer: "Tropical Fruits SAC", price: "$2.80/kg", badge: "GlobalGAP" },
              { name: "Espárragos Verdes", producer: "Agro Ica Export", price: "$4.00/kg", badge: "BRC" }
            ].map((product, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/40 bg-card/30 p-4 transition-all hover:border-[oklch(0.58_0.14_165)] hover:bg-card/50"
              >
                <h4 className="mb-1 font-bold text-foreground">{product.name}</h4>
                <p className="mb-3 text-sm text-muted-foreground">{product.producer}</p>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{product.price}</span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
                    {product.badge}
                  </span>
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                  Ver Producto
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
