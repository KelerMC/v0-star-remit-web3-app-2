"use client"

import { TrendingUp, TrendingDown, DollarSign, Package, Target, Brain, Calendar, BarChart3, PieChart } from "lucide-react"

export function StatsDashboard() {
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"]
  const salesData = [28500, 32400, 29800, 38600, 42350, 51200]
  const ordersData = [45, 52, 48, 61, 68, 78]
  
  const productPerformance = [
    { name: "Arándanos", sales: 42, revenue: 18450, trend: "+12%", color: "oklch(0.58_0.14_165)" },
    { name: "Café Geisha", sales: 18, revenue: 15200, trend: "+8%", color: "oklch(0.55_0.12_230)" },
    { name: "Aguacate", sales: 24, revenue: 12280, trend: "+15%", color: "oklch(0.65_0.15_145)" },
    { name: "Quinoa", sales: 16, revenue: 8950, trend: "+5%", color: "oklch(0.70_0.12_85)" }
  ]

  const topBuyers = [
    { name: "Fresh Market USA", country: "🇺🇸", orders: 12, revenue: 28400 },
    { name: "Berlin Organic", country: "🇩🇪", orders: 8, revenue: 19800 },
    { name: "Tokyo Premium", country: "🇯🇵", orders: 6, revenue: 15600 },
    { name: "Montreal Fresh", country: "🇨🇦", orders: 5, revenue: 12200 }
  ]

  const aiPredictions = [
    {
      title: "Demanda Proyectada - Próximo Trimestre",
      value: "+28%",
      description: "Aumento esperado en pedidos de arándanos orgánicos",
      confidence: 94
    },
    {
      title: "Precio Óptimo - Café Geisha",
      value: "$13.20/kg",
      description: "Maximiza ingresos sin reducir demanda",
      confidence: 89
    },
    {
      title: "Mejor Temporada",
      value: "Abril - Junio",
      description: "Período con mayor demanda internacional",
      confidence: 92
    },
    {
      title: "Riesgo de Stock",
      value: "Medio",
      description: "Espárragos: aumentar producción 35% para Q2",
      confidence: 87
    }
  ]

  const maxSales = Math.max(...salesData)

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            📊 Estadísticas
          </h1>
          <p className="text-muted-foreground">
            Análisis profundo con predicciones de IA
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ingresos (6 meses)</span>
              <DollarSign className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">$224,050</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              <span>+21.3%</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Pedidos</span>
              <Package className="h-5 w-5 text-[oklch(0.58_0.14_165)]" />
            </div>
            <p className="text-3xl font-bold text-foreground">352</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              <span>+18.5%</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ticket Promedio</span>
              <Target className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">$636</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              <span>+2.4%</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tasa de Retorno</span>
              <BarChart3 className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">68%</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              <span>+5.2%</span>
            </div>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="mb-8 rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Evolución de Ventas</h3>
              <p className="text-sm text-muted-foreground">Últimos 6 meses</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Enero - Junio 2026</span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="space-y-4">
            {months.map((month, index) => (
              <div key={month} className="flex items-center gap-4">
                <span className="w-12 text-sm font-medium text-muted-foreground">{month}</span>
                <div className="flex-1">
                  <div className="relative h-12 overflow-hidden rounded-lg bg-secondary">
                    <div
                      className="h-full bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] transition-all"
                      style={{ width: `${(salesData[index] / maxSales) * 100}%` }}
                    >
                      <div className="flex h-full items-center justify-end pr-4">
                        <span className="text-sm font-bold text-white">
                          ${salesData[index].toLocaleString('en-US')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-20 items-center gap-2">
                  <div className="h-8 w-1 rounded-full bg-blue-400"></div>
                  <span className="text-sm font-semibold text-foreground">{ordersData[index]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-8 rounded bg-gradient-to-r from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)]"></div>
              <span className="text-muted-foreground">Ingresos (USD)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              <span className="text-muted-foreground">Número de pedidos</span>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Product Performance */}
          <div className="rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <PieChart className="h-6 w-6 text-[oklch(0.58_0.14_165)]" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Productos Top</h3>
                <p className="text-sm text-muted-foreground">Por porcentaje de ventas</p>
              </div>
            </div>

            <div className="space-y-4">
              {productPerformance.map((product) => (
                <div key={product.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: product.color }}
                      ></div>
                      <span className="font-semibold text-foreground">{product.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-emerald-400">{product.trend}</span>
                      <span className="font-bold text-foreground">
                        ${product.revenue.toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${product.sales}%`,
                        backgroundColor: product.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Buyers */}
          <div className="rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Target className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Mejores Compradores</h3>
                <p className="text-sm text-muted-foreground">Por volumen de compra</p>
              </div>
            </div>

            <div className="space-y-4">
              {topBuyers.map((buyer, index) => (
                <div
                  key={buyer.name}
                  className="flex items-center justify-between rounded-xl border border-border/40 bg-card/30 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)] text-lg font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{buyer.country}</span>
                        <span className="font-semibold text-foreground">{buyer.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{buyer.orders} pedidos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[oklch(0.58_0.14_165)]">
                      ${buyer.revenue.toLocaleString('en-US')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Predictions Section */}
        <div className="rounded-2xl border border-[oklch(0.58_0.14_165)]/30 bg-gradient-to-br from-[oklch(0.58_0.14_165)]/10 to-[oklch(0.55_0.12_230)]/5 p-8 backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.58_0.14_165)] to-[oklch(0.55_0.12_230)]">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Predicciones con IA
              </h3>
              <p className="text-sm text-muted-foreground">
                Análisis predictivo basado en datos históricos y tendencias de mercado
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aiPredictions.map((prediction) => (
              <div
                key={prediction.title}
                className="rounded-xl border border-border/40 bg-card/50 p-6"
              >
                <h4 className="mb-2 text-sm font-semibold text-muted-foreground">
                  {prediction.title}
                </h4>
                <p className="mb-3 text-3xl font-bold text-[oklch(0.58_0.14_165)]">
                  {prediction.value}
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {prediction.description}
                </p>
                
                {/* Confidence Bar */}
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Nivel de confianza</span>
                    <span className="font-semibold text-foreground">{prediction.confidence}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-[oklch(0.58_0.14_165)] transition-all"
                      style={{ width: `${prediction.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
