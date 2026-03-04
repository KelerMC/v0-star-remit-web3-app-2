"use client"

import { TrendingUp, DollarSign, Package, Award, FileText, Download, BarChart3 } from "lucide-react"

export function ProducerDashboard() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            Dashboard del Productor
          </h1>
          <p className="text-muted-foreground">
            Gestiona tus productos, ventas y documentos
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ventas este mes</span>
              <DollarSign className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">$42,350</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              <span>+18.2%</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pedidos activos</span>
              <Package className="h-5 w-5 text-[oklch(0.65_0.25_275)]" />
            </div>
            <p className="text-3xl font-bold text-foreground">12</p>
            <p className="mt-2 text-sm text-muted-foreground">3 en preparación</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Rating promedio</span>
              <Award className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">4.9 ⭐</p>
            <p className="mt-2 text-sm text-muted-foreground">127 reviews</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Productos activos</span>
              <BarChart3 className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">8</p>
            <p className="mt-2 text-sm text-muted-foreground">2 agotados</p>
          </div>
        </div>

        {/* AI Predictions Section */}
        <div className="mb-8 rounded-2xl border border-[oklch(0.65_0.25_275)]/30 bg-gradient-to-br from-[oklch(0.65_0.25_275)]/10 to-[oklch(0.55_0.2_250)]/5 p-8 backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)]">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Predicciones con IA
              </h3>
              <p className="text-sm text-muted-foreground">
                Análisis basado en tus últimas 50 ventas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border/40 bg-card/50 p-6">
              <p className="mb-2 text-sm text-muted-foreground">
                Proyección próximo mes
              </p>
              <p className="text-2xl font-bold text-emerald-400">$51,200</p>
              <p className="mt-1 text-xs text-muted-foreground">
                +21% vs mes actual
              </p>
            </div>

            <div className="rounded-xl border border-border/40 bg-card/50 p-6">
              <p className="mb-2 text-sm text-muted-foreground">
                Producto más demandado
              </p>
              <p className="text-xl font-bold text-foreground">Arándanos Orgánicos</p>
              <p className="mt-1 text-xs text-muted-foreground">
                42% de tus ventas
              </p>
            </div>

            <div className="rounded-xl border border-border/40 bg-card/50 p-6">
              <p className="mb-2 text-sm text-muted-foreground">
                Recomendación de inversión
              </p>
              <p className="text-2xl font-bold text-[oklch(0.65_0.25_275)]">$8,500</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Para aumentar stock 35%
              </p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mb-8 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground">Pedidos Recientes</h3>
            <button className="text-sm text-[oklch(0.65_0.25_275)] hover:underline">
              Ver todos
            </button>
          </div>

          <div className="space-y-4">
            {[
              { id: "ORD-1234", buyer: "Fresh Market USA", product: "Arándanos 500kg", amount: "$2,250", status: "En tránsito", statusColor: "text-blue-400" },
              { id: "ORD-1233", buyer: "Berlin Organic Store", product: "Quinoa 200kg", amount: "$1,160", status: "Preparando", statusColor: "text-yellow-400" },
              { id: "ORD-1232", buyer: "Tokyo Premium Foods", product: "Café Geisha 50kg", amount: "$625", status: "Entregado", statusColor: "text-emerald-400" }
            ].map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-xl border border-border/40 bg-card/30 p-4"
              >
                <div className="flex-1">
                  <p className="font-mono text-sm text-muted-foreground">{order.id}</p>
                  <p className="font-medium text-foreground">{order.buyer}</p>
                  <p className="text-sm text-muted-foreground">{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">{order.amount}</p>
                  <p className={`text-sm font-medium ${order.statusColor}`}>
                    {order.status}
                  </p>
                </div>
                <button className="ml-4 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.25_275)] to-[oklch(0.55_0.2_250)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                  <FileText className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Document Generation */}
        <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-[oklch(0.65_0.25_275)]" />
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Generación de Documentos
              </h3>
              <p className="text-sm text-muted-foreground">
                Contratos y facturas automáticas para tus pedidos completados
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <button className="flex items-center gap-3 rounded-xl border border-border/60 bg-gradient-to-br from-[oklch(0.65_0.25_275)]/10 to-transparent p-4 text-left transition-colors hover:border-[oklch(0.65_0.25_275)]">
              <FileText className="h-8 w-8 text-[oklch(0.65_0.25_275)]" />
              <div>
                <p className="font-medium text-foreground">Contrato Compraventa</p>
                <p className="text-xs text-muted-foreground">Firmado digitalmente</p>
              </div>
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-border/60 bg-gradient-to-br from-emerald-500/10 to-transparent p-4 text-left transition-colors hover:border-emerald-500">
              <FileText className="h-8 w-8 text-emerald-400" />
              <div>
                <p className="font-medium text-foreground">Factura SUNAT</p>
                <p className="text-xs text-muted-foreground">Electrónica</p>
              </div>
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-border/60 bg-gradient-to-br from-blue-500/10 to-transparent p-4 text-left transition-colors hover:border-blue-500">
              <Download className="h-8 w-8 text-blue-400" />
              <div>
                <p className="font-medium text-foreground">Exportar Todo</p>
                <p className="text-xs text-muted-foreground">ZIP con docs</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
